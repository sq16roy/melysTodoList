(function(){
'use strict';

angular.module('angular15App')
  //controller
.controller("TodoCtrl", function ($scope, JsonService) {
   var model = JsonService.getData();
   /*JsonService.getData(function(data){
        model = data;

    }); otra forma de hacerlo */
    console.log(model);
    $scope.showList = false;
    $scope.todo = model;
    $scope.validate = '';
    //function to add new tasks
    $scope.add = function (name) {
        if (!name) {
                $scope.validate = $scope.warningInput();
            } else {
                $scope.todo.items.push(
                    {actions: name, done: false, state: 'Incomplete'}
                );
                $scope.validate = '';
            }
    $scope.myNewName = '';
    };
   //end new tasks
   
   //function to count pending tasks
    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) {
                count++;
            }
        });
        return count;
    };
    //end pending tasks
    
    //function to add class to a pending count new tasks
    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    };
    //end pending count
    
    //function to validate new tasks
    $scope.warningInput = function () {
        if (!$scope.myNewName) {
            return "has-error";
        } else {
           $scope.validate = '';
        }
    };
    //end validate
    
    //function to change state on view
    $scope.state = function (state,index) {
        if (state) {
            state = 'Done';
        } else {
            state = 'Incomplete';
        }
        $scope.todo.items[index].state = state;
        
    };
    //end change state
    
    //function to delete tasks
    $scope.delete = function (index) {
        console.log($scope.todo.items[index]);
        $scope.todo.items.splice(index,1);
    };
    //end delete
    
    //function to get edite task info
    $scope.tempEditInfo = '';
    $scope.edit = function (item) {
       $scope.tempEditInfo  = item.actions;
       $scope.tempState = item.done;
        $scope.tempIndex = $scope.todo.items.map(function(e) { return e.actions; }).indexOf(item.actions);
        //console.log( $scope.tempEditInfo);
        console.log( $scope.tempIndex);
    };
    //end get edit
    
    //function to save edited tasks info
    $scope.saveEdit = function () {
        console.log($scope.tempEditInfo);
       $scope.todo.items[$scope.tempIndex].actions = $scope.tempEditInfo;
       $scope.todo.items[$scope.tempIndex].done = $scope.tempState;
       if ($scope.tempState) {
           $scope.todo.items[$scope.tempIndex].state = 'Done';
       } else {
           $scope.todo.items[$scope.tempIndex].state = 'Incomplete';
       }
    };
    //end save edit
    
    //function to order colums
    $scope.myOrder = [];
    $scope.orderBy = function (order) {
        if (order === 'd') {
            $scope.myOrder = $scope.todo.items[0].actions;
            console.log($scope.myOrder);
        }
    }
    //end order
});
//end controller
})();
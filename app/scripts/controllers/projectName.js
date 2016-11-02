'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular15App
 */
angular.module('myAngularApp')
  .controller('ProjectNameCtrl', function ($scope, $localStorage, JsonService) {
    $scope.subteamNew = 'Select one';
    //load first data
    if (!$localStorage.prevPageData) {
      $localStorage.prevPageData = JsonService.getData();
      $scope.myUsers = $localStorage.prevPageData;
      console.log($scope.myUsers);
    } else {
      $scope.myUsers = $localStorage.prevPageData;
      console.log($scope.myUsers.users);
    }
    
    $scope.showSubmit = function (selectedName) {
      if (!$scope.newUsername) {
        $scope.newProjectName = '';
      }
    };

    $scope.submitNew = function (selectedName, selectedProjectName, selectedSub) {
      var temCount = 1;
      var tempData = $localStorage.prevPageData.users.length;
      for (var i = 0; i < tempData; i++) {
          if ($localStorage.prevPageData.users[i].name === selectedName) {
            $localStorage.prevPageData.users[i].projects.push(
              {
                "name" : selectedProjectName,
                "subteam" : [
                  {
                    "name" : selectedSub,
                    "items" : []
                  }
                ]
              }
            );
            //break;
          } else {
            temCount = temCount+1;
            console.log(temCount);
            if (temCount == tempData) {
            $localStorage.prevPageData.users.push(
              {
                "name" : selectedName,
                "projects" : [
                  {
                    "name" : selectedProjectName,
                    "subteam" : [
                      {
                        "name" : selectedSub,
                        "items" : []
                      }
                    ]
                  }
                ]
              }
            );
          };
          };
        }
        $scope.newUsername = '';
        $scope.newProjectName = '';
        $scope.subteamNew = 'Select one';
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular15App
 */
angular.module('angular15App')
  .controller('SearchProjectCtrl', function ($scope, $localStorage, JsonService) {
    
    $scope.subteam = "---------";
    $scope.selectedName = "---------";
    $scope.showSelects = false;
    $scope.tempProjects = '';
    $scope.tempSubTeam = [];
    //load first data
    if (!$localStorage.prevPageData) {
      $localStorage.prevPageData = JsonService.getData();
      $scope.myUsers = $localStorage.prevPageData;
      console.log($scope.myUsers);
    } else {
      $scope.myUsers = $localStorage.prevPageData;
      console.log($scope.myUsers.users);
    }
//function to show projects names
    $scope.showingData = function(selectedName){
     console.log($scope.myUsers.users.length);
      for (var i = 0; i < $scope.myUsers.users.length ; i++) {
        if (selectedName === $scope.myUsers.users[i].name) {
          console.log(selectedName);
          $scope.showSelects = true;
          $scope.tempProjects = $scope.myUsers.users[i].projects;
          break;
        } else {
          $scope.showSelects = false;
        }
      };
    };

    //function to show sub team as per selected projects
    $scope.showingSubTeamData = function(selectedName){
     $scope.tempSubTeam = '';
      for (var i = 0; i < $scope.tempProjects.length ; i++) {
        if (selectedName === $scope.tempProjects[i].name) {
          for (var i = 0; i < $scope.tempProjects[i].subteam.length; i++) {
              $scope.tempSubTeam.push($scope.tempProjects.subteam[i].name);
          };
          break;
        } else {
          //$scope.showSelects = false;
        }
      };
    };
  });

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
        $scope.subteamNew = 'Select one';
      }
    };

    $scope.submitNew = function (selectedName, selectedProjectName, selectedSub) {
      if (testName(selectedName) != -1) {
        if (testProjectName(selectedName,selectedProjectName) != -1) {
          if (testProjectSubName(selectedName, selectedProjectName, selectedSub) != -1) {
            $scope.subTeamError = true;
            $scope.subteamNew = 'Select one';
          } else {
            $localStorage.prevPageData.users[testName(selectedName)].projects[testProjectName(selectedName,selectedProjectName)].subteam.push(
              {
                "name" : selectedSub,
                "items" : []
              }
            );
            $scope.newUsername = '';
            $scope.newProjectName = '';
            $scope.subteamNew = 'Select one';
          };
        } else {
          $localStorage.prevPageData.users[testName(selectedName)].projects.push(
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
          $scope.newUsername = '';
          $scope.newProjectName = '';
          $scope.subteamNew = 'Select one';
        };
      } else {
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
        $scope.newUsername = '';
        $scope.newProjectName = '';
        $scope.subteamNew = 'Select one';
      };
    };

    var testName = function (selectedName){
      var temCount = -1;
      var tempData = $localStorage.prevPageData.users.length;
      for (var i = 0; i < tempData; i++) {
        if ($localStorage.prevPageData.users[i].name === selectedName) {
          temCount = i;
          break;
        };
      };
      return temCount;
    };

   var testProjectName = function (selectedName, selectedProjectName){
      var temCount = -1;
      var tempData = $localStorage.prevPageData.users[testName(selectedName)].projects.length;
      for (var i = 0; i < tempData; i++) {
        if ($localStorage.prevPageData.users[testName(selectedName)].projects[i].name === selectedProjectName) {
          temCount = i;
          break;
        };
      };
      return temCount;
    };

    var testProjectSubName = function (selectedName, selectedProjectName, selectedSub){
      var temCount = -1;
      var tempData =  $localStorage.prevPageData.users[testName(selectedName)].projects[testProjectName(selectedName,selectedProjectName)].subteam.length;
      for (var i = 0; i < tempData; i++) {
        if ( $localStorage.prevPageData.users[testName(selectedName)].projects[testProjectName(selectedName,selectedProjectName)].subteam[i].name === selectedSub) {
          temCount = i;
          break;
        };
      };
      return temCount;
    };
  });

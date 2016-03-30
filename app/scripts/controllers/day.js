'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the angular15App
 */
angular.module('angular15App')
  .controller('DayCtrl', function ($scope, days) {
    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    $scope.day = week[days.today];
  })
  
  .controller('tomorrowCtrl', function ($scope, days) {
    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    $scope.day = week[days.tomorrow];
  })
  

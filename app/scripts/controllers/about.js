'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular15App
 */
angular.module('angular15App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the angular15App
 */
angular.module('myAngularDirectives', [])

  .directive('highlight', function ($filter) {
    var dayFilter = $filter("dayName");
    return function($scope, element, attrs) {
        if (dayFilter($scope.day) === attrs.highlight) {
            element.css("color", "red");
        }
    };
  })
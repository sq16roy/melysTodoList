'use strict';

/**
 * @ngdoc function
 * @name angular15App.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the angular15App
 */
angular.module('myAngularFilters', [])

.filter('dayName', function() {
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return function(input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
})
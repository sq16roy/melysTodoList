(function(){   

 "use strict";
/**
 * @ngdoc overview
 * @name angular15App
 * @description
 * # angular15App
 *
 * Main module of the application.
 */
angular.module('angular15App', ['ngAnimate','myAngularServices', 'ngResource','ngRoute','ngSanitize','ngTouch', 'myAngularDirectives', 'myAngularFilters'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TodoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Day', {
        templateUrl: 'views/day.html',
        controller: 'DayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();

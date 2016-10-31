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
angular.module('angular15App', ['ngAnimate','myAngularServices', 'ngResource','ngRoute','ngSanitize','ngTouch','ngStorage'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();

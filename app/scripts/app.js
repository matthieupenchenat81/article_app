'use strict';

/**
 * @ngdoc overview
 * @name articleAppApp
 * @description
 * # articleAppApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('articleAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router'
  ]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    });
});
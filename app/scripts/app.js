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
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('index.home', {
      url: "home",
      templateUrl: "views/home.html",
    })
    .state('index.contact', {
      url: "contact",
      templateUrl: "views/contact.html",
    })
    .state('index.new', {
      url: "newPost",
      templateUrl: "views/new_post.html"
    })
    .state('index.postsCategory', {
      url: "categories/:categoryId/posts",
      templateUrl: "views/list_post.html"
    })
    .state('index.detailPost', {
      url: "categories/:categoryId/posts/:postId",
      templateUrl: "views/post.html"
    });
});
'use strict';

/**
 * @ngdoc function
 * @name articleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the articleAppApp
 */
angular.module('articleAppApp')
  .controller('MainCtrl', function ($scope, $state) {

  	$scope.changeState = function(state) {
        $state.go(state);
    };

    $scope.postsListByCategory = function(categoryId) {

	    $state.go('index.postsCategory', {
	      categoryId: categoryId
	    });
    };

   $scope.readPost = function(categoryId ,postId) {

   		$state.go('index.detailPost', {
	      categoryId: categoryId,
	      postId: postId
	    });
   };

  });
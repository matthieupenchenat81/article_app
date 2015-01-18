'use strict';

/**
 * @ngdoc function
 * @name articleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the articleAppApp
 */
angular.module('articleAppApp')
  .controller('MainCtrl', function ($scope, $state, $modal) {

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

   $scope.inHome = function() {
      return ($state.$current.self.name == 'index.home')
   }

   $scope.open = function (modal,size) {

    var modalInstance = $modal.open({
      templateUrl: 'views/'+modal+'.html',
      controller: 'SignInCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      //$scope.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };

  });

angular.module('articleAppApp').controller('SignInCtrl', function ($scope, $modalInstance, items) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


angular.module('articleAppApp').controller('SignUpCtrl', function ($scope, $modalInstance, items) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
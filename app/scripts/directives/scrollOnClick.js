'use strict';

(function() {

	angular.module('articleAppApp')
		.directive('scrollOnClick', function() {
			return {
				link: function(scope, $elm) {
					$elm.on('click', function() {
						var body = $("html, body");
						body.animate({
							scrollTop: 0
						}, '500');
					});
				}
			}
		});
})();
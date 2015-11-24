/**
 * Created by Mike on 11/23/2015.
 */

angular.module('BlogTopic', [])

	.controller('blogTopicCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		console.log('---> blogTopicCtrl');

	}])

	.controller('blog0Ctrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		console.log('---> blog Topic 0');
		$scope.doBlogClick = function () {
			console.log('you clicked blog 0!');
		}

	}])


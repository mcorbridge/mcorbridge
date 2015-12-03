/**
 * Created by Mike on 11/23/2015.
 */

angular.module('ProjectsTopic', [])

	.controller('projectsTopicCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		console.log('---> projectsTopicCtrl');

		$scope.goProject = function (state) {
			var a = document.createElement('a');
			switch (state) {
				case 'passwordProtector':
					a.href = 'http://mcorbridge.com/test/test.html';
					break;
				case 'sudoku':
					a.href = 'http://mcorbridge.com/sudoku/html/index.html';
					break;
				case 'robotArm':
					a.href = 'http://mcorbridge.com/robotArm/index.html';
					break;
			}
			a.click();
		}

	}])


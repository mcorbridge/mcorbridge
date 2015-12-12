/**
 * Created by Mike on 11/23/2015.
 */

angular.module('ProjectsTopic', [])

	.controller('projectsTopicCtrl', ['$rootScope', '$scope', '$interval', 'projectInfo', function ($rootScope, $scope, $interval, projectInfo) {

		console.log('---> projectsTopicCtrl');

		$scope.goProject = function (state) {

			$rootScope.$emit('linkOutsideSite');

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

			var clickDelay = $interval(function () {
				console.log('click delay');
				a.click();
			}, 1000, 1);

		}

	}])

	.factory('data', function () {
		return {
			data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		}
	})

	.factory('projectInfo', ['data', function (data) {
		return {
			passwordProtector: 'http://mcorbridge.com/test/test.html',
			sudoku: 'http://mcorbridge.com/sudoku/html/index.html',
			robotArm: 'http://mcorbridge.com/robotArm/index.html',
			data: data.data
		}
	}])




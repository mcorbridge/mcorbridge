/**
 * Created by Mike on 11/23/2015.
 */

angular.module('AboutMeTopic', [])

	.controller('aboutMeTopicCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		$scope.divStyle = '#000000';

		$scope.doResumeDownload = function () {
			var a = document.createElement('a');
			a.href = '../img/MichaelCorbridgeResume.docx';
			a.download = 'MichaelCorbridgeResume.docx';
			a.click();
		}

		$scope.onVersionClick = function (state) {
			switch (state) {
				case 'long':
					TweenLite.set('.thisIsAboutMe', {visibility: 'visible'});
					TweenLite.set('.aboutMeShort', {visibility: 'hidden'});
					break;

				case 'short':
					TweenLite.set('.thisIsAboutMe', {visibility: 'hidden'});
					TweenLite.set('.aboutMeShort', {visibility: 'visible'});
					break;
			}
		}

	}])


/**
 * Created by Mike on 11/23/2015.
 */

angular.module('AboutMeTopic', [])

	.controller('aboutMeTopicCtrl', ['$rootScope', '$scope', '$sce', '$http', 'angularFireFactory', function ($rootScope, $scope, $sce, $http) {

		//get 'about me' text
		$http({
			method: 'GET',
			url: '../js/json/about.json'
		}).then(function successCallback(response) {
			var re = new RegExp('_', 'g');
			$scope.aboutMeLongText = response.data.aboutMeLongV2.join('_').toString().replace(re, '');
		}, function errorCallback(response) {
			console.log('something went very, very wrong with retrieval of "about me" text.')
		});

		// default version state
		TweenLite.set('.shortVersion', {css: {background: '#ffff00'}});
		TweenLite.set('.aboutMeShort', {visibility: 'visible'});

		$scope.divStyle = '#000000';

		$scope.doResumeDownload = function () {
			var a = document.createElement('a');
			a.href = '../img/MichaelCorbridgeResume.docx';
			a.download = 'MichaelCorbridgeResume.docx';
			a.click();
		};

		$scope.onVersionClick = function (state) {

			TweenLite.set('.longVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.shortVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.faqVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.contactVersion', {css: {background: '#ffffff'}});

			TweenLite.set('.aboutMeLong', {visibility: 'hidden'});
			TweenLite.set('.aboutMeShort', {visibility: 'hidden'});
			TweenLite.set('.aboutFAQ', {visibility: 'hidden'});
			TweenLite.set('.aboutContact', {visibility: 'hidden'});
			TweenLite.set('.tools', {visibility: 'hidden'});

			switch (state) {
				case 'long':
					TweenLite.set('.longVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutMeLong', {visibility: 'visible'});
					break;

				case 'short':
					TweenLite.set('.shortVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutMeShort', {visibility: 'visible'});
					break;

				case 'faq':
					TweenLite.set('.faqVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutFAQ', {visibility: 'visible'});
					break;

				case 'contact':
					TweenLite.set('.contactVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutContact', {visibility: 'visible'});
					break;

				case 'tools':
					TweenLite.set('.tools', {visibility: 'visible'});
					getComments();
					break;
			}
		};





	}])


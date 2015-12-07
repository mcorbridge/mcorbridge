/**
 * Created by Mike on 11/23/2015.
 */

angular.module('AboutMeTopic', [])

	.controller('aboutMeTopicCtrl', ['$rootScope', '$scope', '$sce', '$http', 'angularFireFactory', function ($rootScope, $scope, $sce, $http, angularFireFactory) {

		angularFireFactory.init();

		//get 'about me' text
		$http({
			method: 'GET',
			url: '../js/json/about.json'
		}).then(function successCallback(response) {
			var re = new RegExp('_', 'g');
			var aboutMeLong = response.data.aboutMeLong.join('_').toString().replace(re, '');
			$scope.aboutMeLongText = aboutMeLong;
		}, function errorCallback(response) {
			console.log('something went very, very wrong with retrieval of "about me" text.')
		});

		// default version state
		TweenLite.set('.longVersion', {css: {background: '#ffff00'}});

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

			TweenLite.set('.thisIsAboutMe', {visibility: 'hidden'});
			TweenLite.set('.aboutMeShort', {visibility: 'hidden'});
			TweenLite.set('.aboutFAQ', {visibility: 'hidden'});
			TweenLite.set('.aboutContact', {visibility: 'hidden'});
			TweenLite.set('.tools', {visibility: 'hidden'});

			switch (state) {
				case 'long':
					TweenLite.set('.longVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.thisIsAboutMe', {visibility: 'visible'});
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

		var getComments = function () {
			var comments = angularFireFactory.read();
			$scope.blogComments = [];

			for (var n = 0; n < comments.length; n++) {
				var comment = comments[n];
				$scope.blogComments.push({
					comment: comment.b.comment.comment,
					date: comment.b.comment.date,
					isRead: comment.b.comment.isRead
				});
			}
		}

	}])


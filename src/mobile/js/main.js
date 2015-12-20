/**
 * Created by Mike on 12/19/2015.
 */

angular.module('mainMobile', ['Media'])

	.controller('initCtrl', ['$scope', 'getMedia', function ($scope, getMedia) {


		var setTitle = function () {
			var deviceWidth = getMedia.getWidth();
			var deviceHeight = getMedia.getHeight();
			var titleWidth = 800;
			var titleHeight = 50;

			if (deviceHeight > deviceWidth) {   //portrait
				//TweenMax.set('.headerTitle', {css:{top:'130%'}});
			} else {
				var titleScale = deviceWidth / titleWidth;
				TweenMax.set('.titleSvg', {css: {scale: titleScale, transformOrigin: "left"}});
			}


		}

		var moveTopics = function () {
			TweenMax.to('.about', 1, {x: '150%', ease: Back.easeInOut, delay: 1});
			TweenMax.to('.portfolio', 1, {x: '150%', ease: Back.easeInOut, delay: 2});
			TweenMax.to('.projects', 1, {x: '150%', ease: Back.easeInOut, delay: 3});
			TweenMax.to('.blog', 1, {x: '150%', ease: Back.easeInOut, delay: 4});
		}

		$scope.ngIncludeLoaded = function () {
			setTitle();
			moveTopics();
		}


	}])

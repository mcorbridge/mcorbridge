/**
 * Created by Mike on 12/19/2015.
 */

angular.module('mainMobile', ['Media'])

	.run(['$window', '$rootScope', function ($window, $rootScope) {

		$rootScope.getWindowOrientation = function () {
			$rootScope.$emit('orientationChange', $window.orientation);
			return $window.orientation;
		};

		$rootScope.$watch($rootScope.getWindowOrientation, function (newValue, oldValue) {
			$rootScope.degrees = newValue;
		}, true);

		angular.element($window).bind('orientationchange', function () {
			$rootScope.$apply();
		});
	}])

	.controller('initCtrl', ['$scope', '$rootScope', '$element', '$window', 'getMedia', function ($scope, $rootScope, $element, $window, getMedia) {


		$scope.aboutContentStyle = 'aboutContent landscape';

		$rootScope.$on('orientationChange', function (event, data) {
			var orientation = null;
			if (data === 0 || data === 180) {
				orientation = 'landscape';
				setOrientationValues()
			} else if (data === 90 || data === -90) {
				orientation = 'portrait';
			}
			setOrientationStyles(orientation);
		});

		// based on device orientation styles (css class) will be dynamically changed to optimize the view via ng-class
		var setOrientationStyles = function (orientation) {
			if (orientation === 'landscape') {
				$scope.aboutContentStyle = 'aboutContent landscape';
			} else {  // portrait orientation
				$scope.aboutContentStyle = 'aboutContent portrait';
			}
		}


		var currentView = null;

		$scope.isAbout = false;
		$scope.isPortfolio = false;
		$scope.isProjects = false;
		$scope.isBlog = false;

		$scope.aboutContent = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by " +
			"the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; " +
			"and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. " +
			"These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our " +
			"being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims " +
			"of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man " +
			"therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures " +
			"pains to avoid worse pains."


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
		};

		var moveTopics = function () {
			TweenMax.to('.about', 1, {x: '150%', ease: Back.easeInOut, delay: 1});
			TweenMax.to('.portfolio', 1, {x: '150%', ease: Back.easeInOut, delay: 2});
			TweenMax.to('.projects', 1, {x: '150%', ease: Back.easeInOut, delay: 3});
			TweenMax.to('.blog', 1, {x: '150%', ease: Back.easeInOut, delay: 4});
		};

		$scope.ngIncludeLoaded = function () {
			setTitle();
			moveTopics();
		};

		$scope.clickTopic = function (topic) {
			currentView = topic;
			switch (topic) {
				case 'about':
					doOpenAboutTopicView();
					break;
				case 'portfolio':
					doOpenPortfolioTopicView();
					break;
				case 'projects':
					doOpenProjectsTopicView();
					break;
				case 'blog':
					doOpenBlogTopicView();
					break;
			}
		};

		$scope.doClose = function () {
			$scope.isAbout = false;
			$scope.isPortfolio = false;
			$scope.isProjects = false;
			$scope.isBlog = false;

			TweenMax.set('.aboutContent', {css: {visibility: 'hidden'}});
			TweenMax.set('.portfolioContent', {css: {visibility: 'hidden'}});
			TweenMax.set('.projectsContent', {css: {visibility: 'hidden'}});
			TweenMax.set('.blogContent', {css: {visibility: 'hidden'}});

			switch (currentView) {
				case 'about':
					doCloseAboutTopicView();
					break;
				case 'portfolio':
					doClosePortfolioTopicView();
					break;
				case 'projects':
					doCloseProjectsTopicView();
					break;
				case 'blog':
					doCloseBlogTopicView();
					break;
			}
		};

		var doOpenAboutTopicView = function () {
			TweenMax.to('.portfolio', 1, {x: '0%', ease: Back.easeInOut, delay: 0.0});
			TweenMax.to('.projects', 1, {x: '0%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.blog', 1, {x: '0%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.about', 1, {css: {scaleY: "5%", transformOrigin: "0% 0%"}, delay: 1.0});
			TweenMax.set('.aboutTitle', {css: {opacity: 0}});
			TweenMax.set('.topicContent', {css: {visibility: 'visible'}, delay: 2.0});
			$scope.isAbout = true;
			TweenMax.to('.aboutContent', 1, {css: {visibility: 'visible'}, delay: 2.0});
		};

		var doOpenPortfolioTopicView = function () {
			TweenMax.to('.about', 1, {x: '0%', ease: Back.easeInOut, delay: 0.0});
			TweenMax.to('.projects', 1, {x: '0%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.blog', 1, {x: '0%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.portfolio', 1, {top: '15%', delay: 1.0});
			TweenMax.to('.portfolio', 1, {css: {scaleY: "5%", transformOrigin: "0% 0%"}, delay: 1.0});
			TweenMax.set('.portfolioTitle', {css: {opacity: 0}});
			TweenMax.set('.topicContent', {css: {visibility: 'visible'}, delay: 2.0});
			$scope.isPortfolio = true;
			TweenMax.to('.portfolioContent', 1, {css: {visibility: 'visible'}, delay: 2.0});
		};

		var doOpenProjectsTopicView = function () {
			TweenMax.to('.about', 1, {x: '0%', ease: Back.easeInOut, delay: 0.0});
			TweenMax.to('.portfolio', 1, {x: '0%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.blog', 1, {x: '0%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.projects', 1, {top: '15%', delay: 1.0});
			TweenMax.to('.projects', 1, {css: {scaleY: "5%", transformOrigin: "0% 0%"}, delay: 1.0});
			TweenMax.set('.projectsTitle', {css: {opacity: 0}});
			TweenMax.set('.topicContent', {css: {visibility: 'visible'}, delay: 2.0});
			$scope.isProjects = true;
			TweenMax.to('.projectsContent', 1, {css: {visibility: 'visible'}, delay: 2.0});
		};

		var doOpenBlogTopicView = function () {
			TweenMax.to('.about', 1, {x: '0%', ease: Back.easeInOut, delay: 0.0});
			TweenMax.to('.portfolio', 1, {x: '0%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.projects', 1, {x: '0%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.blog', 1, {top: '15%', delay: 1.0});
			TweenMax.to('.blog', 1, {css: {scaleY: "5%", transformOrigin: "0% 0%"}, delay: 1.0});
			TweenMax.set('.blogTitle', {css: {opacity: 0}});
			TweenMax.set('.topicContent', {css: {visibility: 'visible'}, delay: 2.0});
			$scope.isBlog = true;
			TweenMax.to('.blogContent', 1, {css: {visibility: 'visible'}, delay: 2.0});
		};

		// --------------------------------------------------------------------------------------

		var doCloseAboutTopicView = function () {
			TweenMax.to('.about', 1, {css: {scaleY: "1%", transformOrigin: "0% 0%"}, delay: 0.0});
			TweenMax.to('.portfolio', 1, {x: '150%', ease: Back.easeInOut, delay: 0.0});
			TweenMax.to('.projects', 1, {x: '150%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.blog', 1, {x: '150%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.set('.aboutTitle', {css: {opacity: 1}, delay: 1.0});
			TweenMax.set('.topicContent', {css: {visibility: 'hidden'}});
		};

		var doClosePortfolioTopicView = function () {
			TweenMax.to('.portfolio', 1, {css: {scaleY: "1%", transformOrigin: "0% 0%"}, delay: 0.0});
			TweenMax.to('.portfolio', 1, {css: {top: "35%"}, delay: 0.0});
			TweenMax.to('.about', 1, {x: '150%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.projects', 1, {x: '150%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.blog', 1, {x: '150%', ease: Back.easeInOut, delay: 1.0});
			TweenMax.set('.portfolioTitle', {css: {opacity: 1}, delay: 1.0});
			TweenMax.set('.topicContent', {css: {visibility: 'hidden'}});
		};

		var doCloseProjectsTopicView = function () {
			TweenMax.to('.projects', 1, {css: {scaleY: "1%", transformOrigin: "0% 0%"}, delay: 0.0});
			TweenMax.to('.projects', 1, {css: {top: "55%"}, delay: 0.0});
			TweenMax.to('.about', 1, {x: '150%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.portfolio', 1, {x: '150%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.blog', 1, {x: '150%', ease: Back.easeInOut, delay: 1.0});
			TweenMax.set('.projectsTitle', {css: {opacity: 1}, delay: 1.0});
			TweenMax.set('.topicContent', {css: {visibility: 'hidden'}});
		};

		var doCloseBlogTopicView = function () {
			TweenMax.to('.blog', 1, {css: {scaleY: "1%", transformOrigin: "0% 0%"}, delay: 0.0});
			TweenMax.to('.blog', 1, {css: {top: "75%"}, delay: 0.0});
			TweenMax.to('.about', 1, {x: '150%', ease: Back.easeInOut, delay: 0.25});
			TweenMax.to('.portfolio', 1, {x: '150%', ease: Back.easeInOut, delay: 0.50});
			TweenMax.to('.projects', 1, {x: '150%', ease: Back.easeInOut, delay: 1.0});
			TweenMax.set('.blogTitle', {css: {opacity: 1}, delay: 1.0});
			TweenMax.set('.topicContent', {css: {visibility: 'hidden'}});
		}


	}])

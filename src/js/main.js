/**
 * Created by Mike on 11/10/2015.
 */
angular.module('main', ['IntroRotate', 'InfoWindows', 'Media', 'AboutMeTopic', 'PortfolioTopic', 'ProjectsTopic', 'BlogTopic'])

	.run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
		console.log('*** starting 20 min timeout ***');
		var twentyMinTimeout = 1000 * 60 * 20;
		$timeout(function () {
			console.log('*** timeout fired ***');
			$rootScope.$emit('timeout');
		}, twentyMinTimeout);
	}])


	.controller('headerCtrl', ['$rootScope', '$scope', '$interval', function ($rootScope, $scope, $interval) {

		// do not try to do anything to the included file UNTIL we know it is loaded
		$scope.ngIncludeLoaded = function(file){
			console.log(file + ' is loaded');

			if(file === 'mcorbridgeTitle'){
				setTitle();
			}
			if(file === 'madeWithAngular'){
				setAngularSVG();
			}
			if(file === 'madeWithGreenSock'){
				setGreenSockSVG();
			}
			if (file === 'madeWith') {
				setMadeWithSVG();
			}
		};

		var arrPath = [];

		var setTitle = function(){
			//stub for future code
		};

		var setAngularSVG = function(){
			//stub for future code
		};

		var setGreenSockSVG = function(){
			//stub for future code
		};

		var setMadeWithSVG = function () {
			//stub for future code
		};


		var wasMadeByClicked = false;
		$rootScope.doHeaderImgTransform = function () {
			if(!wasMadeByClicked){
				TweenLite.to('.madeWithAngular',1,{css:{opacity:0}});
				TweenLite.to('.madeWithGreenSock',1,{css:{opacity:1}});
			}else{
				TweenLite.to('.madeWithAngular',1,{css:{opacity:1}});
				TweenLite.to('.madeWithGreenSock',1,{css:{opacity:0}});
			}
			wasMadeByClicked = !wasMadeByClicked;
		};

		var swapMadeByImgInterval;

		// automagically swap out the 'made by' images
		$rootScope.$on('startTitle', function () {
			swapMadeByImgInterval = $interval(function () {
				$rootScope.doHeaderImgTransform()
			}, 10000, 0);
		});

		$rootScope.$on('reset', function () {
			$interval.cancel(swapMadeByImgInterval);
		});


	}])

	.controller('initCtrl', ['$rootScope', '$scope', 'getMedia', function($rootScope, $scope, getMedia) {

		$rootScope.startBounce = true;

		var deviceWidth = getMedia.getWidth();
		var deviceHeight = getMedia.getHeight();
		$scope.screenDimension = 'device dimensions: height: ' + deviceHeight + ' width: ' + deviceWidth;
		$rootScope.screenDimensions = {height:deviceHeight, width:deviceWidth};
		console.log('main :' + $rootScope.screenDimensions.height + 'x' + $rootScope.screenDimensions.width);


		var startBounce = function(){
			TweenMax.to('.startIcon', 0.1, {top:"180px", onComplete:reset,  delay:2.5});
		};

		var reset = function(){
			if(!$rootScope.startBounce)
				return;

			TweenMax.to('.startIcon', 1.0, {top:"210px", onComplete:startBounce, ease:Bounce.easeOut});
		};

		$rootScope.$on('reset',function(){
			$rootScope.startBounce = true;
			//startBounce();

		});

		// random hex color for the cross in the circle
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		TweenMax.set('.xlineV', {css:{stroke:randColor}});
		TweenMax.set('.xlineH', {css:{stroke:randColor}});

		//header and footer settings
		TweenMax.set('.header', {css:{width:'0%'}});
		TweenMax.set('.footer', {css:{width:'0%'}});

		// the 'play' icon bounces slightly to alert user that action is required
		startBounce();

	}]);


/**
 * Created by Mike on 11/10/2015.
 */
angular.module('main', ['IntroRotate','InfoWindows','Media'])


	.controller('headerCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

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
		};

		var arrPath = [];

		var setTitle = function(){
			var pathNumStart = 4145;

			for(var n=0; n<38; n++){
				var tmp = '#path' + pathNumStart;
				pathNumStart = pathNumStart + 2;
				arrPath.push(tmp);
			}

			for(var n=0; n<arrPath.length; n++){
				TweenLite.to(arrPath[n],5,{drawSVG:'0%'});
			}
		};

		var setAngularSVG = function(){

		};

		var setGreenSockSVG = function(){

		};

		$rootScope.$on('startTitle',function(){
			for(var n=0; n<arrPath.length; n++){
				TweenLite.to(arrPath[n],1,{css:{opacity:1}});
			}
			for(var n=0; n<arrPath.length; n++){
				TweenLite.to(arrPath[n],5,{drawSVG:'100%'});
			}
		});

		$rootScope.$on('reset',function(){
			for(var n=0; n<arrPath.length; n++){
				TweenLite.set(arrPath[n],{drawSVG:'0%'});
			}
			for(var n=0; n<arrPath.length; n++){
				TweenLite.set(arrPath[n],{css:{opacity:0}});
			}
		});

		var wasMadeByClicked = false;
		$rootScope.doHeaderImgTransform = function(target){
			if(!wasMadeByClicked){
				TweenLite.to('.madeWithAngular',1,{css:{opacity:0}});
				TweenLite.to('.madeWithGreenSock',1,{css:{opacity:1}});
			}else{
				TweenLite.to('.madeWithAngular',1,{css:{opacity:1}});
				TweenLite.to('.madeWithGreenSock',1,{css:{opacity:0}});
			}
			wasMadeByClicked = !wasMadeByClicked;
		};

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


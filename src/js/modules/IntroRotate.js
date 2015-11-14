/**
 * Created by Mike on 11/10/2015.
 */
angular.module('IntroRotate', [])

	.controller('rotateSegmentCtrl', ['$scope', '$rootScope', function ($scope,$rootScope) {

		console.log('IntroRotate :' + $rootScope.screenDimensions.height + 'x' + $rootScope.screenDimensions.width);

		$scope.divStyle = 1;

		$scope.progressInfo = '';

		var tm0 = new TimelineLite();
		var tm1 = new TimelineLite();
		var tm2 = new TimelineLite();

		TweenLite.set(".rect0",{ rotationY:180, transformOrigin:"50% 50%"});
		TweenLite.set(".rect1",{ rotationY:180, transformOrigin:"50% 50%"});

		var isRun = false;
		var isRunning = false;

		$scope.doRotation = function(){

			if(isRunning)
				return;

			if(!isRun){


				TweenMax.to('.progressInfo0',3.5,{css:{opacity:1}});

				isRunning = true;

				$scope.outputTxt6 = 'SVG rotate';
				tm0.to('.pie0', 0.5, {rotation:"90", ease:Linear.easeNone})
					.to('.pie0', 1, {rotation:"-90", ease:Linear.easeNone})
					.to('.pie0', 2, {rotation:"80", ease:Linear.easeNone});

				tm1.to('.pie1', 0.5, {rotation:"-120", ease:Linear.easeNone, delay:0.25})
					.to('.pie1', 1, {rotation:"270", ease:Linear.easeNone})
					.to('.pie1', 2, {rotation:"80", ease:Linear.easeNone});

				tm2.to('.pie2', 0.5, {rotation:"350", ease:Linear.easeNone, delay:0.5})
					.to('.pie2', 1, {rotation:"-270", ease:Linear.easeNone})
					.to('.pie2', 2, {rotation:"80", ease:Linear.easeNone, onComplete:doRotationComplete});
				isRun = true;
			}else{
				isRun = false;
				TweenLite.set('.pie0',{css: {rotation:"21"}});
				TweenLite.set('.pie1',{css:  {rotation:"141"}});
				TweenLite.set('.pie2',{css:  {rotation:"262"}});
				TweenLite.set(".pline0",{visibility:'hidden'});
				TweenLite.set(".pline1",{visibility:'hidden'});
				TweenLite.set(".pline2",{visibility:'hidden'});
				TweenLite.set(".pline3",{visibility:'hidden'});
				TweenLite.set(".rect0",{visibility:'hidden'});
				TweenLite.set(".rect1",{visibility:'hidden'});
				TweenLite.set(".rect2",{visibility:'hidden'});
				TweenLite.set(".rect3",{visibility:'hidden'});
				TweenLite.set(".topic0",{visibility:'hidden'});
				TweenLite.set(".topic1",{visibility:'hidden'});
				TweenLite.set(".topic2",{visibility:'hidden'});
				TweenLite.set(".topic3",{visibility:'hidden'});
				TweenMax.to(".startIcon", 0.5, { y:30 , opacity:1 , ease:Power1.easeInOut});
				$rootScope.$emit('reset');
				console.log('SVG rotate reset');
			}


		}

		var doRotationComplete = function(){
			console.log('doRotationComplete');

			// we need another routine for mobile devices
			if($rootScope.screenDimensions.width <= 1360) {
				isRunning = false;
				TweenMax.to('.progressInfo0',0.5,{css:{opacity:0}});
				return;
			}

			TweenMax.to('.progressInfo0',0.5,{css:{opacity:0}});
			TweenMax.to('.progressInfo1',3.5,{css:{opacity:1}});

			var tl = new TimelineLite();
			TweenLite.set(".pline0",{visibility:'visible'});
			TweenLite.set(".pline1",{visibility:'visible'});
			TweenLite.set(".pline2",{visibility:'visible'});
			TweenLite.set(".pline3",{visibility:'visible'});
			tl.from([".pline0",".pline1",".pline2",".pline3"],1,{drawSVG:0, onComplete:doDrawLinesComplete});

		}

		var doDrawLinesComplete = function(){
			console.log('doDrawLinesComplete');

			var tl = new TimelineLite();
			TweenLite.set(".rect0",{visibility:'visible'});
			TweenLite.set(".rect1",{visibility:'visible'});
			TweenLite.set(".rect2",{visibility:'visible'});
			TweenLite.set(".rect3",{visibility:'visible'});
			tl.from([".rect0",".rect1",".rect2",".rect3"],1.0,{drawSVG:0, onComplete:doDrawRectComplete});
		}

		var doDrawRectComplete = function(){
			console.log('doDrawRectComplete');

			TweenMax.to('.progressInfo1',0.5,{css:{opacity:0}});
			TweenMax.to('.progressInfo2',0.5,{css:{opacity:1}});

			TweenLite.set(".topic0",{visibility:'visible', opacity:0});
			TweenLite.to(".topic0",0.5,{css:{opacity:1}});
			TweenLite.set(".topic1",{visibility:'visible', opacity:0});
			TweenLite.to(".topic1",0.5,{css:{opacity:1}});
			TweenLite.set(".topic2",{visibility:'visible', opacity:0});
			TweenLite.to(".topic2",0.5,{css:{opacity:1}});
			TweenLite.set(".topic3",{visibility:'visible', opacity:0});
			TweenLite.to(".topic3",0.5,{css:{opacity:1},onComplete:removeProgressInfo});
			isRunning = false;
		}

		var removeProgressInfo = function(){
			TweenLite.to(".progressInfo2",2,{css:{opacity:0},delay:1});
		}

		$scope.doClickBox = function(box){
			console.log('box ' + box + ' was clicked');

			var leftVal = '50%';
			var duration = 0.5;
			TweenLite.to(".div6", duration, {css:{left:'150%'}});

			switch (box){
				case 0:
					TweenLite.set(".info0",{visibility:'visible'});
					TweenLite.to(".info0", duration, {css:{left:leftVal}, onComplete:doSwipeComplete});
					break;
				case 1:
					TweenLite.set(".info1",{visibility:'visible'});
					TweenLite.to(".info1", duration, {css:{left:leftVal}, onComplete:doSwipeComplete});
					break;
				case 2:
					TweenLite.set(".info2",{visibility:'visible'});
					TweenLite.to(".info2", duration, {css:{ left:leftVal}, onComplete:doSwipeComplete});
					break;
				case 3:
					TweenLite.set(".info3",{visibility:'visible'});
					TweenLite.to(".info3", duration, {css:{ left:leftVal}, onComplete:doSwipeComplete});
					break;
			}
		}

		var doSwipeComplete = function(){
			TweenLite.set(".topic0",{visibility:'hidden'});
			TweenLite.set(".topic1",{visibility:'hidden'});
			TweenLite.set(".topic2",{visibility:'hidden'});
			TweenLite.set(".topic3",{visibility:'hidden'});
			TweenLite.set(".div6",{visibility:'hidden'});
			TweenLite.to(".div6", 1, {css:{left:'-150%'}});
		}

		$scope.doStart = function(event){
			console.log(event.type);
			if(event.type === 'mouseover'){
				TweenLite.set(".startIcon",{css:{color:'green'}});
			}else if(event.type === 'mouseout'){
				TweenLite.set(".startIcon",{css:{color:'black'}});
			}else{
				TweenLite.set(".startIcon",{css:{color:'red'}});
				$scope.doRotation();
				TweenMax.to(".startIcon", 1, { y:900 , opacity:0 , ease:Power1.easeInOut});
				$rootScope.startBounce = false;
			}
		}

	}])
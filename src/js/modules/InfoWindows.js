/**
 * Created by Mike on 11/11/2015.
 */

angular.module('InfoWindows', [])

	.controller('infoCtrl', ['$scope', '$rootScope', function ($scope,$rootScope) {


		// do not try to do anything to the included file UNTIL we know it is loaded
		$scope.ngIncludeLoaded = function(file){
			console.log('inside "InfoWindows" -------------> ' + file + ' is loaded');
			$rootScope.$emit('skunkWorksLoaded');
		};


		TweenLite.set(".info0",{css:{left:'-150%'}});
		TweenLite.set(".info1",{css:{left:'-150%'}});
		TweenLite.set(".info2",{css:{left:'-150%'}});
		TweenLite.set(".info3",{css:{left:'-150%'}});


		$scope.menuAction = function(event,box){

			console.log('close box: ' + box);
			var leftVal = '150%';
			var duration = 0.5;

			TweenLite.set(".div6", {visibility: 'visible'});
			TweenLite.set(".cardWrapper0", {visibility: 'visible'});
			TweenLite.set(".cardWrapper1", {visibility: 'visible'});
			TweenLite.set(".cardWrapper2", {visibility: 'visible'});
			TweenLite.set(".cardWrapper3", {visibility: 'visible'});

			switch (box) {
				case 0:
					TweenLite.to(".info0", duration, {css: {left: leftVal}, onComplete: closeWindowComplete});
					TweenLite.to(".div6", duration, {css: {left: '50%'}});
					break;
				case 1:
					TweenLite.to(".info1", duration, {css: {left: leftVal}, onComplete: closeWindowComplete});
					TweenLite.to(".div6", duration, {css: {left: '50%'}});
					break;
				case 2:
					TweenLite.to(".info2", duration, {css: {left: leftVal}, onComplete: closeWindowComplete});
					TweenLite.to(".div6", duration, {css: {left: '50%'}});
					break;
				case 3:
					TweenLite.to(".info3", duration, {css: {left: leftVal}, onComplete: closeWindowComplete});
					TweenLite.to(".div6", duration, {css: {left: '50%'}});
					break;

			}
		}

		var closeWindowComplete = function(){
			TweenLite.set(".menuIcon",{css:{color:'black'}});
			var leftVal = '-150%';
			TweenLite.set(".info0",{visibility:'hidden'});
			TweenLite.set(".info1",{visibility:'hidden'});
			TweenLite.set(".info2",{visibility:'hidden'});
			TweenLite.set(".info3",{visibility:'hidden'});
			TweenLite.set(".info0",{css:{left:leftVal}});
			TweenLite.set(".info1",{css:{left:leftVal}});
			TweenLite.set(".info2",{css:{left:leftVal}});
			TweenLite.set(".info3",{css:{left:leftVal}});

		}
	}])

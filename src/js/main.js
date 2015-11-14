/**
 * Created by Mike on 11/10/2015.
 */
angular.module('main', ['IntroRotate','InfoWindows','Media'])

	.controller('initCtrl', ['$rootScope', '$scope', 'getMedia', function($rootScope, $scope, getMedia) {

		$rootScope.startBounce = true;

			var deviceWidth = getMedia.getWidth();
		var deviceHeight = getMedia.getHeight();
		$scope.screenDimension = 'device dimensions: height: ' + deviceHeight + ' width: ' + deviceWidth;
		$rootScope.screenDimensions = {height:deviceHeight, width:deviceWidth};
		console.log('main :' + $rootScope.screenDimensions.height + 'x' + $rootScope.screenDimensions.width);


		var startBounce = function(){
			TweenMax.to('.startIcon', 0.1, {top:"180px", onComplete:reset,  delay:2.5});
		}

		var reset = function(){
			if(!$rootScope.startBounce)
				return;

			TweenMax.to('.startIcon', 1.0, {top:"210px", onComplete:startBounce, ease:Bounce.easeOut});
		}

		$rootScope.$on('reset',function(){
			$rootScope.startBounce = true;
			//startBounce();

		})

		startBounce();
	}]);


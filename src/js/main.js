/**
 * Created by Mike on 11/10/2015.
 */
angular.module('main', ['IntroRotate', 'InfoWindows', 'Media', 'AboutMeTopic', 'PortfolioTopic', 'ProjectsTopic', 'BlogTopic', 'ngRoute', 'ui.bootstrap', 'AngularFire'])

	.run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
		$rootScope.isRouted = false;
		console.log('*** starting 24 hr timeout ***');
		var oneDayTimeout = 1000 * 60 * 60 * 24; // I just did this for fun
		$timeout(function () {
			console.log('*** timeout fired ***');
			$rootScope.$emit('timeout');
		}, oneDayTimeout);
	}])

	.config(['$routeProvider', function ($routeProvider) {
		console.log('-------------- main config --------------');
		$routeProvider.
			when('/projects', {
				controller: 'RouterCtrl'
			});
	}])

	.controller('RouterCtrl', ['$rootScope', '$scope', '$routeParams', '$route', function ($rootScope, $scope, $routeParams, $route) {
		//If you want to use URL attributes before the website is loaded
		$rootScope.$on('$routeChangeSuccess', function () {
			$rootScope.isRouted = true;
			TweenMax.set('.header', {css: {visibility: 'visible', width: '100%'}});
			TweenMax.set('.footer', {css: {visibility: 'visible', width: '100%'}});
			TweenLite.set(".madeWithAngular", 4, {css: {opacity: 1}});
			TweenLite.set(".footerContent", {css: {visibility: 'visible'}});
			TweenLite.set(".co", {css: {visibility: 'visible', opacity: 1}});

			$rootScope.$emit('startTitle');
			$rootScope.$emit('routedEvent');
		});
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
			if ($rootScope.isRouted)
				TweenLite.set(".mcorbridgeAppArch", {css: {opacity: 1}});

		};

		var setAngularSVG = function(){
			//stub for future code
		};

		var setGreenSockSVG = function(){
			//stub for future code
		};

		var setMadeWithSVG = function () {
			if ($rootScope.isRouted)
				TweenLite.set(".madeWithTitle", {css: {opacity: 1}});
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
			console.log('--------------> swapMadeByImgInterval');
			swapMadeByImgInterval = $interval(function () {
				$rootScope.doHeaderImgTransform()
			}, 10000, 0);
		});

		$rootScope.$on('reset', function () {
			wasMadeByClicked = false;
			$interval.cancel(swapMadeByImgInterval);
		});

		$rootScope.$on('linkOutsideSite', function () {
			console.log('cancel(swapMadeByImgInterval)');
			wasMadeByClicked = false;
			$interval.cancel(swapMadeByImgInterval);
		});

		var subRosaClicks = 0;
		$scope.subRosa = function () {
			subRosaClicks++;
			if (subRosaClicks >= 3) {
				subRosaClicks = 0;
				TweenLite.to('.toolsChest', 1, {left: '0', zIndex: '9999'});
			}
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

			TweenMax.to('.startIcon', 1.0, {top: "216px", onComplete: startBounce, ease: Bounce.easeOut});
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

	}])

	.controller('leaveMsgCtrl', ['$rootScope', '$scope', '$uibModal', function ($rootScope, $scope, $uibModal) {

		$scope.open = function (size) {

			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'addCommentContent.html',
				controller: 'modalCommentInstanceCtrl',
				size: size
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				console.log('Modal dismissed at: ' + new Date());
			});
		};
	}])

	.controller('modalCommentInstanceCtrl', ['$scope', '$uibModalInstance', 'angularFireFactory', 'sanitizeInput', function ($scope, $uibModalInstance, angularFireFactory, sanitizeInput) {

		$scope.title = 'Leave a message for Mike ...';
		$scope.comment = '';

		angularFireFactory.init();

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();
		var dateToday = dd + '-' + mm + '-' + yyyy;

		sanitizeInput.getBadWords();

		$scope.ok = function () {
			console.log('save info || date: ' + dateToday + ' comment: ' + $scope.comment + ' isRead: false');
			angularFireFactory.create(dateToday, $scope.comment, 'false');
			$uibModalInstance.close('close');
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};

		$scope.checkInput = function () {
			var arrInput = $scope.comment.split(" ");
			for (var n = 0; n < arrInput.length; n++) {
				if (sanitizeInput.checkInput(arrInput[n]))
					$scope.comment = 'Try again, but this time with less profanity.';
			}
		}
	}])

	.controller('toolsCtrl', ['$rootScope', '$scope', '$uibModal', 'angularFireFactory', function ($rootScope, $scope, $uibModal, angularFireFactory) {

		$scope.closeToolsChest = function () {
			TweenLite.to('.toolsChest', 0.33, {left: '-420'});
		};

		$scope.toolsGetComments = function () {
			console.log('toolsGetComments');

			var openShowComments = function (size) {

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'showCommentsContent.html',
					controller: 'modalShowCommentInstanceCtrl',
					size: size,
					backdrop: 'static'
				});

				modalInstance.result.then(function (selectedItem) {
					$scope.selected = selectedItem;
				}, function () {
					console.log('Modal dismissed at: ' + new Date());
				});
			};

			openShowComments('lg');
			TweenLite.to('.toolsChest', 0.33, {left: '-420'});
			angularFireFactory.init();
		};

		$scope.signIn = function () {
			console.log('sign in');
		}

	}])

	.controller('modalShowCommentInstanceCtrl', ['$scope', '$uibModalInstance', 'angularFireFactory', function ($scope, $uibModalInstance, angularFireFactory) {

		$scope.title = 'Comments for Mike ...';


		var getComments = function () {
			var comments = angularFireFactory.read();

			console.log('comments');
			console.log(comments);
			console.log('comments');

			$scope.blogComments = [];

			for (var n = 0; n < comments.length; n++) {
				var comment = comments[n];
				$scope.blogComments.push({
					comment: comment.b.comment.comment,
					date: comment.b.comment.date,
					isRead: comment.b.comment.isRead
				});
			}
		};


		$scope.ok = function () {
			$uibModalInstance.close('close');
			TweenLite.to('.toolsChest', 1, {left: '0', zIndex: '9999'});
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
			TweenLite.to('.toolsChest', 1, {left: '0', zIndex: '9999'});
		};

		getComments();

	}])



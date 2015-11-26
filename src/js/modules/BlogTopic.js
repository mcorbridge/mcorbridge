/**
 * Created by Mike on 11/23/2015.
 */

angular.module('BlogTopic', ['BlogData'])


	.controller('blogTopicCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
		console.log('---> blogTopicCtrl');
	}])

	.controller('fullBlogArticleCtrl', ['$rootScope', '$scope', 'blogDataFactory', function ($rootScope, $scope, blogDataFactory) {

		var data;

		$rootScope.$on('blogItemClicked', function () {
			data = blogDataFactory.getBlogInfo();
			$scope.blogTitle = data.blogTitle;
			$scope.blogDate = data.blogDate;
			$scope.blogAbstract = data.blogAbstract;
			$scope.blogContent = data.blogContent;
		});

		$scope.doClick = function () {
			TweenMax.set('.blogContainer', {visibility: 'visible'});
			TweenMax.set('.fullBlogArticle', {visibility: 'hidden'});
			console.log('blogTitle ' + $scope.blogTitle);
			console.log('blogDate ' + $scope.blogDate);
			console.log('blogAbstract ' + $scope.blogAbstract);
			console.log('blogContent ' + $scope.blogContent);
		}
	}])

	.controller('blog0Ctrl', ['$rootScope', '$scope', 'blogTopic0', 'blogDataFactory', function ($rootScope, $scope, blogTopic0, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic0.blogTitle, blogTopic0.blogDate, blogTopic0.blogAbstract, blogTopic0.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic0.blogTitle;
		$scope.blogDate = blogTopic0.blogDate;
		$scope.blogAbstract = blogTopic0.blogAbstract;

	}])

	.controller('blog1Ctrl', ['$rootScope', '$scope', 'blogTopic1', 'blogDataFactory', function ($rootScope, $scope, blogTopic1, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic1.blogTitle, blogTopic1.blogDate, blogTopic1.blogAbstract, blogTopic1.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic1.blogTitle;
		$scope.blogDate = blogTopic1.blogDate;
		$scope.blogAbstract = blogTopic1.blogAbstract;
	}])

	.factory('blogDataFactory', function () {

		var data = {};
		return {
			setBlogInfo: function (blogTitle, blogDate, blogAbstract, blogContent) {
				data.blogTitle = blogTitle;
				data.blogDate = blogDate;
				data.blogAbstract = blogAbstract;
				data.blogContent = blogContent;
			},
			getBlogInfo: function () {
				return data;
			}
		}
	})


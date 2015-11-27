/**
 * Created by Mike on 11/23/2015.
 */

angular.module('BlogTopic', ['BlogData'])

	//------------------------------------------------------------------------------------------------------------------
	//I'm gonna find a way to add this functionality after I have added enough blog content
	.controller('blogTopicCtrl', ['$rootScope', '$scope', 'blogTopic0', 'blogTopic1', 'blogTopic2', function ($rootScope, $scope, blogTopic0, blogTopic1, blogTopic2) {

		var blogs = [
			blogTopic0.blogData(),
			blogTopic1.blogData(),
			blogTopic2.blogData()
		];

		$scope.doBlogSearch = function (searchTerm) {
			//searchTerm = ' ' + searchTerm + ' ';
			var isSearchTermPresent;
			for (var n = 0; n < blogs.length; n++) {
				isSearchTermPresent = false;
				if (searchTitle(searchTerm, blogs[n].title) !== -1) {
					isSearchTermPresent = true;
				}
				if (searchContent(searchTerm, blogs[n].content) !== -1) {
					isSearchTermPresent = true;
				}
				if (isSearchTermPresent) {
					console.log('the search term ' + searchTerm + ' was found in the blog dated ' + blogs[n].date);
				}

			}
			if (!isSearchTermPresent) {
				console.log('search term ' + searchTerm + ' is not present');
			}
		}

		var searchTitle = function (searchTerm, blogTitle) {
			return blogTitle.indexOf(searchTerm);
		}

		var searchContent = function (searchTerm, blogContent) {
			return blogContent.indexOf(searchTerm);
		}
	}])

	//------------------------------------------------------------------------------------------------------------------

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

	//------------------------------------------------------------------------------------------------------------------

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

	//------------------------------------------------------------------------------------------------------------------

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

	//------------------------------------------------------------------------------------------------------------------

	.controller('blog2Ctrl', ['$rootScope', '$scope', 'blogTopic2', 'blogDataFactory', function ($rootScope, $scope, blogTopic2, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic2.blogTitle, blogTopic2.blogDate, blogTopic2.blogAbstract, blogTopic2.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic2.blogTitle;
		$scope.blogDate = blogTopic2.blogDate;
		$scope.blogAbstract = blogTopic2.blogAbstract;
	}])

	//------------------------------------------------------------------------------------------------------------------

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


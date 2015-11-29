/**
 * Created by Mike on 11/23/2015.
 */

angular.module('BlogTopic', ['BlogData', 'ngDialog', 'ngSanitize'])

	//------------------------------------------------------------------------------------------------------------------
	//todo I'm going to find a way to add more to this search functionality after I have added enough blog content
	.controller('blogTopicCtrl',
	['$rootScope', '$scope',
		'blogTopic0', 'blogTopic1', 'blogTopic2', 'blogTopic3', 'blogTopic4', 'blogTopic5', 'blogTopic6', 'blogTopic7',
		'$filter', 'ngDialog',
		function ($rootScope, $scope,
				  blogTopic0, blogTopic1, blogTopic2, blogTopic3, blogTopic4, blogTopic5, blogTopic6, blogTopic7,
				  $filter, ngDialog) {

		var blogs = [
			blogTopic0.blogData(),
			blogTopic1.blogData(),
			blogTopic2.blogData(),
			blogTopic3.blogData(),
			blogTopic4.blogData(),
			blogTopic5.blogData(),
			blogTopic6.blogData(),
			blogTopic7.blogData()
		];

			$scope.doBlogSearch = function () {

				var isSearchTermFound = false;
				var searchResults = '';

			for (var n = 0; n < blogs.length; n++) {
				if (searchTitle($scope.searchTerm, blogs[n].title) !== -1) {
					isSearchTermFound = true;
				}
				if (searchContent($scope.searchTerm, blogs[n].content) !== -1) {
					isSearchTermFound = true;
				}
				if (isSearchTermFound) {
					searchResults += blogs[n].date;
				}

				//todo eventually I would like the highlight the actual text in the blog (somehow)
				var addSpan = $filter('AddSpan')(blogs[n].title, $scope.searchTerm);
				console.log(addSpan);

			}
				openDialog(searchResults);
			};

			var openDialog = function (searchResults) {
				$scope.dialogBind = searchResults;

				ngDialog.open({
					template: 'partials/_searchDialog.html',
					controller: 'blogTopicCtrl',
					className: 'ngdialog-theme-plain',
					closeByDocument: true,
					scope: $scope
				});
		}


		var searchTitle = function (searchTerm, blogTitle) {
			return blogTitle.indexOf(searchTerm);
		};

		var searchContent = function (searchTerm, blogContent) {
			return blogContent.indexOf(searchTerm);
		};
	}])

	//------------------------------------------------------------------------------------------------------------------

	.controller('fullBlogArticleCtrl', ['$rootScope', '$scope', '$sce', 'blogDataFactory', function ($rootScope, $scope, $sce, blogDataFactory) {

		var data;

		$rootScope.$on('blogItemClicked', function () {
			data = blogDataFactory.getBlogInfo();
			$scope.blogTitle = data.blogTitle;
			$scope.blogDate = data.blogDate;
			$scope.blogAbstract = data.blogAbstract;
			$scope.blogContent = $sce.trustAsHtml(data.blogContent);
		});

		$scope.doClick = function () {
			TweenMax.set('.blogContainer', {visibility: 'visible'});
			TweenMax.set('.fullBlogArticle', {visibility: 'hidden'});
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
	.controller('blog3Ctrl', ['$rootScope', '$scope', 'blogTopic3', 'blogDataFactory', function ($rootScope, $scope, blogTopic3, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic3.blogTitle, blogTopic3.blogDate, blogTopic3.blogAbstract, blogTopic3.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic3.blogTitle;
		$scope.blogDate = blogTopic3.blogDate;
		$scope.blogAbstract = blogTopic3.blogAbstract;
	}])

	//------------------------------------------------------------------------------------------------------------------
	.controller('blog4Ctrl', ['$rootScope', '$scope', 'blogTopic4', 'blogDataFactory', function ($rootScope, $scope, blogTopic4, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic4.blogTitle, blogTopic4.blogDate, blogTopic4.blogAbstract, blogTopic4.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic4.blogTitle;
		$scope.blogDate = blogTopic4.blogDate;
		$scope.blogAbstract = blogTopic4.blogAbstract;
	}])

	//------------------------------------------------------------------------------------------------------------------
	.controller('blog5Ctrl', ['$rootScope', '$scope', 'blogTopic5', 'blogDataFactory', function ($rootScope, $scope, blogTopic5, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic5.blogTitle, blogTopic5.blogDate, blogTopic5.blogAbstract, blogTopic5.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic5.blogTitle;
		$scope.blogDate = blogTopic5.blogDate;
		$scope.blogAbstract = blogTopic5.blogAbstract;
	}])

	//------------------------------------------------------------------------------------------------------------------
	.controller('blog6Ctrl', ['$rootScope', '$scope', 'blogTopic6', 'blogDataFactory', function ($rootScope, $scope, blogTopic6, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic6.blogTitle, blogTopic6.blogDate, blogTopic6.blogAbstract, blogTopic6.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic6.blogTitle;
		$scope.blogDate = blogTopic6.blogDate;
		$scope.blogAbstract = blogTopic6.blogAbstract;
	}])

	//------------------------------------------------------------------------------------------------------------------
	.controller('blog7Ctrl', ['$rootScope', '$scope', 'blogTopic7', 'blogDataFactory', function ($rootScope, $scope, blogTopic7, blogDataFactory) {

		$scope.doBlogClick = function () {
			blogDataFactory.setBlogInfo(blogTopic7.blogTitle, blogTopic7.blogDate, blogTopic7.blogAbstract, blogTopic7.blogContent);
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});
			$rootScope.$emit('blogItemClicked');
		};

		$scope.blogTitle = blogTopic7.blogTitle;
		$scope.blogDate = blogTopic7.blogDate;
		$scope.blogAbstract = blogTopic7.blogAbstract;
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

	.filter("AddSpan", function () {
		return function (searchContent, searchTerm) {
			if (searchContent.indexOf(searchTerm) > -1) {
				return "<span class='x'>" + searchTerm + "</span>";
			} else {
				return searchTerm;
			}
		}
	});


/**
 * Created by Mike on 11/23/2015.
 */

angular.module('BlogTopic', ['ngSanitize'])

	.controller('blogSearchCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

		$scope.showSearch = true;
		$scope.isSortDesc = true;

		$http.get('../js/json/blogData.json').
			success(function (data, status, headers, config) {
				$scope.blogItems = doSpecialDateSort(data);
			}).
			error(function (data, status, headers, config) {
				console.log('Blog json data was not received correctly.');
			});

		var doSpecialDateSort = function (data) {
			for (var obj in data) {
				var dateStr = data[obj]['abbrBlogDate'].split('-');
				var date = new Date('20' + dateStr[2], dateStr[1] - 1, dateStr[0]);
				data[obj]['dateObj'] = date;
			}
			return data.sort(date_sort_desc);
		}

		var date_sort_asc = function (obj1, obj2) {
			if (obj1.dateObj > obj2.dateObj) return 1;
			if (obj1 < obj2.dateObj) return -1;
			return 0;
		};

		var date_sort_desc = function (obj1, obj2) {
			if (obj1.dateObj < obj2.dateObj) return 1;
			if (obj1 > obj2.dateObj) return -1;
			return 0;
		};

		$scope.itemClick = function (blogItem) {
			$scope.showSearch = false;
			TweenMax.set('.blogContainer', {visibility: 'hidden'});
			TweenMax.set('.fullBlogArticle', {visibility: 'visible'});

			$scope.blogTitle = blogItem.blogTitle;
			$scope.blogDate = blogItem.blogDate;
			$scope.blogAbstract = blogItem.blogAbstract;
			var re = new RegExp('_', 'g');
			$scope.blogContent = $sce.trustAsHtml(blogItem.blogContent.join('_').toString().replace(re, ''));
		};

		$scope.srchBtnLbl = 'search';

		var expr1 = function (item) {
			if (searchAllBlogText(item, $scope.searchTerm)) {
				return true;
			} else {
				return false;
			}
		};

		var expr2 = function (item) {
			return true;
		};

		var searchAllBlogText = function (item, searchTerm) {
			var blogContent = item.blogContent.toString();
			var searchTermFound = false;
			if (item.blogDate.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
				searchTermFound = true;
			}
			if (item.blogTitle.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
				searchTermFound = true;
			}
			if (item.blogAbstract.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
				searchTermFound = true;
			}
			if (blogContent.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
				searchTermFound = true;
			}
			return searchTermFound;
		};

		$scope.filterExpr = expr2;

		var isSearch = false;

		$scope.doBlogSearch = function () {
			if (!isSearch) {
				$scope.filterExpr = expr1;
				$scope.srchBtnLbl = 'clear';
			} else {
				$scope.filterExpr = expr2;
				$scope.srchBtnLbl = 'search';
				$scope.searchTerm = '';
			}
			isSearch = !isSearch;
		};

		$scope.closeFullBlogItem = function () {
			$scope.showSearch = true;
			TweenMax.set('.blogContainer', {visibility: 'visible'});
			TweenMax.set('.fullBlogArticle', {visibility: 'hidden'});
		};

		$scope.blogYear = '';

		$scope.isNewYear = function (blogDate) {
			var yr = blogDate.split(',')[1].toString();
			if ($scope.blogYear !== yr) {
				$scope.blogYear = yr;
				return true;
			} else {
				return false;
			}
		};

		$scope.searchInputKeyUp = function (event) {
			if (event.keyCode === 13) {
				$scope.doBlogSearch();
			}
		}

		$scope.sortByDate = function (direction) {
			$scope.blogYear = '';
			if (direction === 'asc') {
				$scope.isSortDesc = false;
				$scope.blogItems.sort(date_sort_asc);
			} else if (direction === 'desc') {
				$scope.blogItems.sort(date_sort_desc);
				$scope.isSortDesc = true;
			}
		}

	}])




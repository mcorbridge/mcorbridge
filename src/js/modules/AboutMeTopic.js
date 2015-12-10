/**
 * Created by Mike on 11/23/2015.
 */

angular.module('AboutMeTopic', [])

	.controller('aboutMeTopicCtrl', ['$rootScope', '$scope', '$sce', '$http', 'angularFireFactory', function ($rootScope, $scope, $sce, $http) {

		//get 'about me' text
		$http({
			method: 'GET',
			url: '../js/json/about.json'
		}).then(function successCallback(response) {
			var re = new RegExp('_', 'g');
			$scope.aboutMeLongText = response.data.aboutMeLong.join('_').toString().replace(re, '');
		}, function errorCallback(response) {
			console.log('something went very, very wrong with retrieval of "about me" text.')
		});

		// default version state
		TweenLite.set('.shortVersion', {css: {background: '#ffff00'}});
		TweenLite.set('.aboutMeShort', {visibility: 'visible'});

		$scope.divStyle = '#000000';

		$scope.doResumeDownload = function () {
			var a = document.createElement('a');
			a.href = '../img/MichaelCorbridgeResume.docx';
			a.download = 'MichaelCorbridgeResume.docx';
			a.click();
		};

		$scope.onVersionClick = function (state) {

			TweenLite.set('.longVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.shortVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.faqVersion', {css: {background: '#ffffff'}});
			TweenLite.set('.contactVersion', {css: {background: '#ffffff'}});

			TweenLite.set('.aboutMeLong', {visibility: 'hidden'});
			TweenLite.set('.aboutMeShort', {visibility: 'hidden'});
			TweenLite.set('.aboutFAQ', {visibility: 'hidden'});
			TweenLite.set('.aboutContact', {visibility: 'hidden'});
			TweenLite.set('.tools', {visibility: 'hidden'});

			switch (state) {
				case 'long':
					TweenLite.set('.longVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutMeLong', {visibility: 'visible'});
					break;

				case 'short':
					TweenLite.set('.shortVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutMeShort', {visibility: 'visible'});
					break;

				case 'faq':
					TweenLite.set('.faqVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutFAQ', {visibility: 'visible'});
					break;

				case 'contact':
					TweenLite.set('.contactVersion', {css: {background: '#ffff00'}});
					TweenLite.set('.aboutContact', {visibility: 'visible'});
					break;

				case 'tools':
					TweenLite.set('.tools', {visibility: 'visible'});
					getComments();
					break;
			}
		};



		// ---------------------------------------------------
		// Create dummy data
		// ---------------------------------------------------

		var data = [
			{date: new Date(1977, 0, 0), name: '1977 Trent University'},
			{date: new Date(1979, 0, 0), name: '1979 DuPont Research Scholarship'},
			{date: new Date(1981, 0, 0), name: '1981 York University'},
			{date: new Date(1990, 0, 0), name: 'tbd'},
			{date: new Date(1995, 0, 0), name: 'tbd'},
			{date: new Date(2000, 0, 0), name: 'tbd'},
			{date: new Date(2001, 0, 0), name: 'tbd'},
			{date: new Date(2002, 0, 0), name: 'tbd'},
			{date: new Date(2003, 0, 0), name: 'tbd'},
			{date: new Date(2004, 0, 0), name: 'tbd'},
			{date: new Date(2005, 0, 0), name: 'tbd'},
			{date: new Date(2005, 0, 0), name: 'tbd'},
			{date: new Date(2006, 0, 0), name: 'tbd'},
			{date: new Date(2007, 0, 0), name: 'tbd'},
			{date: new Date(2008, 0, 0), name: 'tbd'},
			{date: new Date(2009, 0, 0), name: 'tbd'},
			{date: new Date(2010, 0, 0), name: 'tbd'},
			{date: new Date(2011, 0, 0), name: 'tbd'},
			{date: new Date(2012, 0, 0), name: 'tbd'},
			{date: new Date(2013, 0, 0), name: 'tbd'},
			{date: new Date(2014, 0, 0), name: 'tbd'},
			{date: new Date(2015, 0, 0), name: 'tbd'}
		];

		var formatDate = d3.time.format('%b %e');

		var options = {
			margin: {left: 20, right: 20, top: 20, bottom: 20},
			initialWidth: 1000,
			initialHeight: 220
		};

		var innerWidth = options.initialWidth - options.margin.left - options.margin.right;
		var innerHeight = options.initialHeight - options.margin.top - options.margin.bottom;
		var colorScale = d3.scale.category10();

		var vis = d3.select('#timeline')
			.append('svg')
			.attr('width', options.initialWidth)
			.attr('height', options.initialHeight)
			.append('g')
			.attr('transform', 'translate(' + (options.margin.left) + ',' + (options.margin.top) + ')');

		function labelText(d) {
			//return formatDate(d.date) + ' - ' + d.name;
			return (d.name)
		}

// compute labels dimension
		var dummyText = vis.append('text');

		var timeScale = d3.time.scale()
			.domain(d3.extent(data, function (d) {
				return d.date;
			}))
			.range([0, innerWidth])
			.nice();

		var nodes = data.map(function (movie) {
			var bbox = dummyText.text(labelText(movie))[0][0].getBBox();
			movie.h = bbox.height;
			movie.w = bbox.width;
			return new labella.Node(timeScale(movie.date), movie.w + 9, movie);
		});

		dummyText.remove();

// ---------------------------------------------------
// Draw dots on the timeline
// ---------------------------------------------------

		vis.append('line')
			.classed('timeline', true)
			.attr('x2', innerWidth);

		var linkLayer = vis.append('g');
		var labelLayer = vis.append('g');
		var dotLayer = vis.append('g');

		dotLayer.selectAll('circle.dot')
			.data(nodes)
			.enter().append('circle')
			.classed('dot', true)
			.attr('r', 3)
			.attr('cx', function (d) {
				return d.getRoot().idealPos;
			});

		function color(d, i) {
			return '#888';
		}

//---------------------------------------------------
// Labella has utility to help rendering
//---------------------------------------------------

		var renderer = new labella.Renderer({
			layerGap: 60,
			nodeHeight: nodes[0].data.h,
			direction: 'bottom'
		});

		function draw(nodes) {
			// Add x,y,dx,dy to node
			renderer.layout(nodes);

			// Draw label rectangles
			var sEnter = labelLayer.selectAll('rect.flag')
				.data(nodes)
				.enter().append('g')
				.attr('transform', function (d) {
					return 'translate(' + (d.x - d.width / 2) + ',' + (d.y) + ')';
				});

			sEnter
				.append('rect')
				.classed('flag', true)
				.attr('width', function (d) {
					return d.data.w + 9;
				})
				.attr('height', function (d) {
					return d.data.h + 4;
				})
				.attr('rx', 2)
				.attr('ry', 2)
				.style('fill', color);

			sEnter.append('text')
				.attr('x', 4)
				.attr('y', 15)
				.style('fill', '#fff')
				.text(function (d) {
					return labelText(d.data);
				});

			// Draw path from point on the timeline to the label rectangle
			linkLayer.selectAll('path.link')
				.data(nodes)
				.enter().append('path')
				.classed('link', true)
				.attr('d', function (d) {
					return renderer.generatePath(d);
				})
				.style('stroke', color)
				.style('stroke-width', 2)
				.style('opacity', 0.6)
				.style('fill', 'none');
		}

//---------------------------------------------------
// Use labella.Force to place the labels
//---------------------------------------------------

		var force = new labella.Force({
			minPos: -10,
			maxPos: innerWidth
		})
			.nodes(nodes)
			.on('end', function () {
				draw(force.nodes());
			})
			.start(100);

	}])


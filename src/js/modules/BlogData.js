/**
 * Created by Mike on 11/26/2015.
 */

angular.module('BlogData', [])


	.factory('blogTopic0', function () {

		return {
			blogDate: 'November 1, 2015',
			abbrBlogDate: '26-11-15',
			blogTitle: 'Abandon Greensock in favor of Famo.us?',
			blogAbstract: ' An opinionated framework for building your entire app/site like famo.us, or Greensock?',
			blogContent: "SCENE MANAGEMENT, PHYSICS, ETC. GSAP is not meant to be a monolithic, opinionated framework in which you build your entire app/site like famo.us. You can build the way YOU want, and then leverage GSAP to animate pretty much anything JavaScript can touch; CSS properties of DOM elements, canvas library objects, generic objects, SVG, whatever. It's insanely flexible. It solves a bunch of browser bugs and inconsistencies too.With GSAP, you don't have to keep switching animation tools based on your project. It doesn't try to own the rendering layer like famo.us does. It just makes animating a lot faster, more fun and less tedious.That's not to say famo.us is bad at all - some people prefer their approach and it has its strengths for certain types of projects (I think they're going mostly after mobile app development).Yes, GSAP has physics plugins (see the docs). Check out the fluid motion of Draggable which (unlike jQuery UI's Draggable) works inside transformed elements and honors momentum and complex snapping rules. http://greensock.com/draggable/For some preliminary thoughts about famo.us and GSAP, see http://greensock.com/forums/topic/9371-famous-vs-greensock/?...Velocity.js is cool, but it has different goals; it's only for DOM elements and isn't as full-featured as GSAP (runtime controls, sequencing, animating along a path, overwrite management, lag smoothing, synchronized architecture, etc.) Julian did a nice job with it though. More thoughts: http://greensock.com/forums/topic/9449-new-velocityjs-animat...LICENSING: If a client hires you to do a custom project (web site, banner ad, whatever), no special license is needed no matter how much you get paid. The only time you need the license is if you're reselling your product to MULTIPLE customers. That's it. Everything else is free. With this model, a small group of power users who make $ off of GSAP provide a funding mechanism to make it accessible to everyone else and allow GreenSock to provide solid support and continued innovation. Check out the GreenSock forums to see how well-supported it is (and has been for years).I'd encourage you to give the famo.us, Velocity.js, and GSAP a try and see which feels best to you. Have fun!",
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}

	})

	.factory('blogTopic1', function () {

		return {
			blogDate: 'November 26, 2015',
			abbrBlogDate: '11-11-15',
			blogTitle: 'blog topic 1',
			blogAbstract: 'this is the abstract for blog 1',
			blogContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}

	})

	.factory('blogTopic2', function () {

		return {
			blogDate: 'November 12, 2015',
			abbrBlogDate: '27-11-15',
			blogTitle: 'Notes on installing and running my first Famo.us project',
			blogAbstract: 'There are some great resources on getting your first Famo.us project running locally but the best resource is ...',
			blogContent: 'There are some great resources on getting your first Famo.us project running locally but the best resource is YouTube, of course. ' +
			'YouTube has been my goTo source of Do-It-Yourself inspiration ever since I found my self in need of replacing a spoke on my Fulcrum wheel on my ' +
			'road bike.  Seriously,who would have thought that little supermagnet in the package had such an inventive use?  But I digress... ' +
			'"Getting started with the new Famo.us Javascript Engine" placed in the YouTube search field will take you directly to the video devoted to getting ' +
			'the neophyte started on this powerful Javascript engine.  As always, I faithfully played "follow the expert" and promptly became lost.' +
			'<div class="newLine"></div>' +
			'<code>Gotcha #1: Make sure that you call the correct package.json</code>' +
			'<div class="newLine"></div>' +
			'I come from a java and actionscript world, so I am familiar with the need to download jar files and place them in the proper paths, as well as the ' +
			'similar process with swc files.  Javascript uses npm to accomplish the same thing, and once you get used to npm, it is a very sweet little system.',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}

	})

	.factory('blogTopic3', function () {

		var codeExample1 = '<pre>$scope.safeApply = function(fn) {\n' +
			'var phase = this.$root.$$phase;\n' +
			'&nbsp;if(phase == "$apply" || phase == "$digest") {\n' +
			'&nbsp;if(fn && (typeof(fn) === "function")) {\n' +
			'&nbsp;&nbsp;fn();\n' +
			'&nbsp;}\n' +
			'&nbsp;} else {\n' +
			'&nbsp;&nbsp;this.$apply(fn);\n' +
			'&nbsp;}\n' +
			'};</pre>';

		var codeExample2 = '<pre>$scope.safeApply(function() {\n' +
			'&nbsp;&nbsp;&nbsp;alert("Now I am wrapped for protection!");\n' +
			'});</pre>';

		var codeExample3 = '<pre>if(!$scope.$$phase) {\n' +
			'&nbsp;&nbsp;&nbsp;//$digest or $apply\n' +
			'});</pre>';

		return {
			blogDate: 'November 28, 2015',
			abbrBlogDate: '28-11-15',
			blogTitle: 'Huh? $apply already in progress ?',
			blogAbstract: 'What to do when you find yourself triggering the $apply already in progress error while developing with Angular.JS',
			blogContent: 'If you find yourself triggering the <code>$apply already in progress</code> error while developing with Angular.JS (for me I find I hit most often when integrating third party plugins that trigger a lot of DOM events), you can use a <code>safeApply</code> method that checks the current phase before executing your function. I usually just monkey patch this into the $scope object of my topmost controller, and Angular is nice enough to propagate it throughout the rest of my application for me:\n' +
			codeExample1 +
			'And then just replace $apply with safeApply wherever you need it' +
			codeExample2 +
			'You can check if a <code>$digest</code> is already in progress by checking <code>$scope.$$phase</code>' +
			codeExample3 +
			'<code>$scope.$$phase</code> will return <code>$digest</code> or <code>$apply</code> if a <code>$digest</code> or <code>$apply</code> is in progress. I believe the difference between these states is that <code>$digest</code> will process the watches of the current scope and it&#39;s children, and <code>$apply</code> will process the watchers of all scopes.if you find yourself calling <code>$digest</code> or <code>$apply</code> frequently, you may be doing it wrong. I generally find I need to digest when I need to update the scope&#39;s state as a result of a DOM event firing outside the reach of Angular. For example, when a twitter bootstrap modal becomes hidden. Sometimes the DOM event fires when a <code>$digest</code> is in progress, sometimes not. That is why I use this check.',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}

	})

/**
 * Created by Mike on 11/26/2015.
 */

angular.module('BlogData', [])

	// todo store all the blog post data in json then populate the factory objects when that data is returned and processed
	.controller('getBlogPostsCtrl', ['$rootScope', '$http',
		'blogTopic0', 'blogTopic1', 'blogTopic2', 'blogTopic3', 'blogTopic4', 'blogTopic5', 'blogTopic6', 'blogTopic7',
		function ($scope, $http,
				  blogTopic0, blogTopic1, blogTopic2, blogTopic3, blogTopic4, blogTopic5, blogTopic6, blogTopic7) {
		$http.get('../js/json/blogData.json').
			success(function (data, status, headers, config) {
				var re = new RegExp('_', 'g');
				blogTopic0.blogContent = data[0].blogContent.join('_').toString().replace(re, '');
				blogTopic1.blogContent = data[1].blogContent.join('_').toString().replace(re, '');
				blogTopic2.blogContent = data[2].blogContent.join('_').toString().replace(re, '');
				blogTopic3.blogContent = data[3].blogContent.join('_').toString().replace(re, '');
				blogTopic4.blogContent = data[4].blogContent.join('_').toString().replace(re, '');
				blogTopic5.blogContent = data[5].blogContent.join('_').toString().replace(re, '');
				blogTopic6.blogContent = data[6].blogContent.join('_').toString().replace(re, '');
				blogTopic7.blogContent = data[7].blogContent.join('_').toString().replace(re, '');
			}).
			error(function (data, status, headers, config) {
				console.log('Blog json data was not received correctly.');
			});
	}])


	.factory('blogTopic0', function () {
		return {
			blogDate: 'November 1, 2015',
			abbrBlogDate: '26-11-15',
			blogTitle: 'Abandon Greensock in favor of Famo.us?',
			blogCategory: 'animation, javascript',
			blogAbstract: ' An opinionated framework for building your entire app/site like famo.us, or Greensock?',
			blogContent: "",
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic1', function () {
		return {
			blogDate: 'November 26, 2015',
			abbrBlogDate: '26-11-15',
			blogTitle: 'P = NP',
			blogCategory: 'general, personal',
			blogAbstract: 'How to Explain Zero-Knowledge Protocols to Your Children',
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic2', function () {
		return {
			blogDate: 'November 12, 2015',
			abbrBlogDate: '27-11-15',
			blogTitle: 'Notes on installing and running my first Famo.us project',
			blogCategory: 'animation, javascript',
			blogAbstract: 'There are some great resources on getting your first Famo.us project running locally but the best resource is ...',
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic3', function () {
		return {
			blogDate: 'November 28, 2015',
			abbrBlogDate: '28-11-15',
			blogCategory: 'angularjs',
			blogTitle: 'Huh? $apply already in progress ?',
			blogAbstract: 'What to do when you find yourself triggering the $apply already in progress error while developing with Angular.JS',
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic4', function () {
		return {
			blogDate: 'November 29, 2015',
			abbrBlogDate: '11-11-15',
			blogTitle: 'Biscotti',
			blogCategory: 'general, personal',
			blogAbstract: "Twice baked ideas that taste best dipped in chocolate",
			blogContent: "",
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic5', function () {
		return {
			blogDate: 'January 9, 2011',
			abbrBlogDate: '9-1-2011',
			blogTitle: 'A winter kayak excursion',
			blogCategory: 'general, personal',
			blogAbstract: 'The blue sky and brilliant sun belied the fact that his was indeed a frigid place to be.',
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic6', function () {
		return {
			blogDate: 'January 4, 2011',
			abbrBlogDate: '4-1-2011',
			blogTitle: 'Flex Fiber in your Diet',
			blogCategory: 'flex, actionscript',
			blogAbstract: "No it's not the fiber you're thinking of.",
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic7', function () {
		return {
			blogDate: 'November 11, 2015',
			abbrBlogDate: '11-11-2015',
			blogTitle: 'Honesty ... what idiot would build their own blog application?',
			blogCategory: 'angularjs',
			blogAbstract: 'When WordPress, Typepad, Squarespace, LiveJournal, Blogger (the list goes on and on) are all available?',
			blogContent: '',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic8', function () {
		return {
			blogDate: 'October 25, 2015',
			abbrBlogDate: '25-10-2015',
			blogTitle: 'Git along little doggie',
			blogCategory: 'development, tools',
			blogAbstract: 'A productivity tool with an unpleasant command line interface, that treats its users with such utter contempt.',
			blogContent: 'Git is the source code version control system that is rapidly becoming the standard for open source projects. It has a powerful distributed model which allows advanced users to do tricky things with branches, and rewriting history. What a pity that it&#39;s so hard to learn, has such an unpleasant command line interface, and treats its users with such utter contempt.' +
			'<img src="../img/git.png" style="float:left;margin:10px">' +
			'',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic9', function () {
		return {
			blogDate: 'November 10, 2015',
			abbrBlogDate: '10-11-2015',
			blogTitle: 'How to add a new entry to this blog.',
			blogCategory: 'blog, angularjs',
			blogAbstract: 'It can be a bit complicated, so someone should write down the steps (me!)',
			blogContent: 'I really don&#39;t think that this is the most user friendly blog in the world.  In fact, it might be categorized ' +
			'as one of the least user friendly blog applications.  But since only I am using it, I don&#39;t think anyone will be impacted.  But ' +
			'because there might be some periods between my entries, I have better list out the steps to add a new blog entry!' +
			'<div class="newLine"></div>' +
			'Step #1 :: Add a new html blog template to the blog folder.  You can simply cut/paste any file in this directory.  Just ensure that ' +
			'it has a file name consistent with the following changes you are about to make.' +
			'<div class="newLine"></div>' +
			'<img src="../img/newBlog1.png" style="margin:10px">' +
			'<div class="newLine"></div>' +
			'Step #2 :: In <code>_blogTopic.html</code>, add the line to include the previously created blog template. ' +
			'Note how you create a reference to a new controller.' +
			'<div class="newLine"></div>' +
			'<img src="../img/newBlog2.png" style="margin:10px">' +
			'<div class="newLine"></div>' +
			'Step #3 :: Create a new controller in <code>BlogTopic.js</code>.  This controller is set in <code>_blogTopic.html</code>' +
			'<div class="newLine"></div>' +
			'<img src="../img/newBlog3.png" style="margin:10px">' +
			'<div class="newLine"></div>' +
			'Step #4 ::  In <code>BlogTopic.js</code> add the code to inject the new controller and blog entry data.  This will also include this new blog ' +
			'entry in the search.' +
			'<div class="newLine"></div>' +
			'<img src="../img/newBlog4.png" style="margin:10px">' +
			'<div class="newLine"></div>' +
			'Step #5 :: Finally, in <code>BlogData.js</code> create the new blog entry as an Angularjs factory using this pattern.' +
			'<div class="newLine"></div>' +
			'<img src="../img/newBlog5.png" style="margin:10px">' +
			'<div class="newLine"></div>' +
			'That&#39;s all there is to it! How simple is that!',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic10', function () {
		return {
			blogDate: 'December 1, 2015',
			abbrBlogDate: '1-12-2015',
			blogTitle: 'Dalvik does not like me anymore',
			blogCategory: 'android',
			blogAbstract: 'Dealing with the DEX methods limit on Android and Google ',
			blogContent: 'It happens in the blink of an eye. Before, you are an happy Android developer, head down on your (or your company&#39;s) application, adding the coolest libraries to provide more functionalities and to write simpler code. Afterwards, you stare at the dreaded output that states:',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic11', function () {
		var codeExample1 = '<pre style="width:600px">//minify html\n' +
			'&nbsp;&nbsp;&nbsp;gulp.task("html", function () {\n' +
			'&nbsp;&nbsp;&nbsp;gulp.src("src/html/**/*.html") // path to files\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(minifyHtml())\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(gulp.dest("dist/html"));\n' +
			'&nbsp;&nbsp;});</pre>';

		var codeExample2 = '<pre style="width:600px">//minify html\n' +
			'&nbsp;&nbsp;&nbsp;gulp.task("html", function () {\n' +
			'&nbsp;&nbsp;&nbsp;gulp.src("src/html/**/*.html") // path to files\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(minifyHtml())\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(gulp.dest("dist/html"));\n' +
			'\n' +
			'\n' +
			'&nbsp;&nbsp;&nbsp;gulp.src("src/html/partials/_blogTopic.html") // path to THIS file\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(minifyHtml())\n' +
			'&nbsp;&nbsp;&nbsp;.pipe(gulp.dest("dist/html/partials/"));\n' +
			'&nbsp;&nbsp;});</pre>';

		return {
			blogDate: 'December 1, 2015',
			abbrBlogDate: '1-12-2015',
			blogTitle: '"gulp-minify-html" suddenly stops minifying a file in a directory?',
			blogCategory: 'development, gulp',
			blogAbstract: 'I was happily minifying my AngularJS project, when suddenly ...',
			blogContent: 'It sneaks up on you doesn&#39;t.  Everything is going along smoothly.  You feel like the Code Gods are finally starting to smile at you. ' +
			'You can virtually feel the wind filling your sails, as your spinnaker billows in the warm blue ocean sky.  Then,  "crunch", out of the blue you hit a  sandbar.  I my particular case, I was running my Gulp build process through a series of watchers.  Ok, I will admit that for safety I would regularly run Gulp just to ' +
			'make sure all my code has "compiled".  (Side note: coming from a world where code was truly compiled, I find the use of the term "compiled" slightly humerous.) ' +
			'I had a number of html files that I kept organized in a separate directly that I used in <code>ngIncludes</code> that were reqularly updating from the <code>src</code> to ' +
			'the <code>dist</code>.  When my changes suddenly stopped appearing on my web page, I was perplexed.  I checked and indeed the file was there.  I checked the <code>dist</code>, and indeed an earlier version was there, but it had stopped updating.  "Here we go again", I mumbled to myself.  I changed the file name and "Presto!", it appeared back in the <code>dist</code> ' +
			'albeit with the new file name.  I checked the file.  Nothing seemed untoward about it.  No missing tags, or weird chars, or unusual comments. Nada, Nothing, Ziltch. ' +
			'It just suddenly decided, or Gulp minify decided, that it no longer was invited to the party.  With no errors present to give any hint as to why this would happen ' +
			'my Google search did not turn up anything.  I was flummoxed.  Without any further ado, this is the solution. ' +
			'<div class="newLine"></div>' +
			'Here is my Gulp minify code before:' +
			'<div class="newLine"></div>' +
			codeExample1 +
			'<div class="newLine"></div>' +
			'Here is my Gulp minify code after:' +
			'<div class="newLine"></div>' +
			codeExample2 +
			'Notice that I needed to explicity add *that* particular file to the minify. It works.  I have NO idea why the original minify stopped working.  But the wind is back in my sails until I hear that unwelcome grinding on the keel again.',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic12', function () {
		return {
			blogDate: 'December 2, 2015',
			abbrBlogDate: '2-12-2015',
			blogTitle: 'Storing multi-line comments in JSON',
			blogCategory: 'javascript, json',
			blogAbstract: "Look at what happens if you attempt to store entire blog entries in JSON!",
			blogContent: 'JSON is an extremely rigid schema. It is great, but it has a couple of shortcomings, the largest of which is the inability to store multi-line strings. This can be particularly annoying for storing things like structured text and public keys in JSON for later interaction with JavaScript code in the browser. ' +
			'Here is a solution that works great!' +
			'<div class="newLine"></div>' +
			'<pre style="left:25px;width:1200px">' +
			'&nbsp;{\n' +
			'&nbsp;&nbsp;"blogContent": [\n' +
			'&nbsp;&nbsp;&nbsp;"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",\n' +
			'&nbsp;&nbsp;&nbsp;"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",\n' +
			'&nbsp;&nbsp;&nbsp;"sed quia consequuntur magni dolores eos qui cunning lingus voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",\n' +
			'&nbsp;&nbsp;&nbsp;"consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad.",\n' +
			'&nbsp;&nbsp;]}' +
			'</pre>' +
			'<div class="newLine"></div>' +
			'Notice that the paragraph is broken up in an array of strings.  Now once the json data is received by the web page, it is a simple matter to loop through the array of strings and rebuild the paragraph.',
			blogData: function () {
				var tmp = {};
				tmp.date = this.blogDate;
				tmp.title = this.blogTitle;
				tmp.content = this.blogContent;
				return tmp;
			}
		}
	})

	// -----------------------------------------------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopicX', function () {
		return {
			blogDate: 'XXXXXXX XX, 20XX',
			abbrBlogDate: 'XX-XX-XX',
			blogTitle: 'blog topic X',
			blogCategory: 'XXXXX, XXXXXX',
			blogAbstract: 'this is a blog object for any new blog item',
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

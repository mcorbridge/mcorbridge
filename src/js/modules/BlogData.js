/**
 * Created by Mike on 11/26/2015.
 */

angular.module('BlogData', [])

	// todo store all the blog post data in json then populate the factory objects when that data is returned and processed
	.controller('getBlogPostsCtrl', ['$rootScope', '$http', 'blogTopic0', function ($scope, $http, blogTopic0) {
		$http.get('../js/json/blogData.json').
			success(function (data, status, headers, config) {
				console.log('------------> blog data coming at ya');
				console.log(data);
				var tmp = '';
				for (var n = 0; n < data[0].blogContent.length; n++) {
					tmp += data[0].blogContent[n];
				}
				blogTopic0.blogContent = tmp;
			}).
			error(function (data, status, headers, config) {
				console.log('Something went wrong. Very, very, very wrong.');
			});
	}])


	.factory('blogTopic0', function () {

		return {
			blogDate: 'November 1, 2015',
			abbrBlogDate: '26-11-15',
			blogTitle: 'Abandon Greensock in favor of Famo.us?',
			blogCategory: 'animation, javascript',
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

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic1', function () {

		return {
			blogDate: 'November 26, 2015',
			abbrBlogDate: '26-11-15',
			blogTitle: 'P = NP',
			blogCategory: 'general, personal',
			blogAbstract: 'How to Explain Zero-Knowledge Protocols to Your Children',
			blogContent: 'There is no way to verify if there is a feasible solution to some deceptively simple problems.  I should add ' +
			'<strong>*without trying some solutions out*</strong>.  P is set of problems to which a computer can "find" solution easily.  The ' +
			'"P" in this case represents polynominal time.  For example,  say you have 100 boxes to move across the room, and it takes ' +
			'10 minutes to move 1 box.  This task is a straightforward polynominal calculation, and it should take you 16 hr 40 min (100 * 10 min). ' +
			'However there are sets of problems to which even a computer cannot find a solution easily, but can easily check the solution. ' +
			'But some things are hard for even computers to search. Sounds weird, doesn&#39;t it? One example is reverse multiplication. Of course if I say "What&#39;s 5 times 3?" you can say "15" in a nanosecond, whooosh! But what&#39;s the answer to, "What two numbers mutiliplied together equal 21?" (Wait for the answer, 7 x 3.) Right! Now, what two numbers multiplied together equal 23? (Wait for the answer, or for frustration.) ' +
			'The only two numbers multiplied together that equal 23 are 1 and 23 itself. That took some thinking, didn&#39;t it? And 23 is a small number. Think if the number were hundreds of digits long. And the thing is, the best programs in the world can&#39;t reverse multiplication much better than a 7-year-old might try to, just testing one number, and then the next, and then the next. Computers can do it faster, but we don&#39;t really know how to tell a computer to do it smarter. People get PhD&#39;s in this stuff, and they only know how to tell computers to do reverse multiplication a little bit smarter. ' +
			'So maybe there is no smarter way. But maybe there is, and we just haven&#39;t found it yet. That&#39;s the P/NP problem in a nutshell: if I can recognize an answer right away -- 1 times 23 is 23, duh -- does that help me search for the answer faster? People think it&#39;s so important that the person who figures out the answer, yes or no, will win a <a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems" target="_blank">million dollars</a>.',
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

	// -----------------------------------------------------------------------------------------------------------------

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
			blogCategory: 'angularjs',
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

	// -----------------------------------------------------------------------------------------------------------------

	.factory('blogTopic4', function () {

		return {
			blogDate: 'November 29, 2015',
			abbrBlogDate: '11-11-15',
			blogTitle: 'Biscotti',
			blogCategory: 'general, personal',
			blogAbstract: "Twice baked ideas that taste best dipped in chocolate",
			blogContent: 'I love hanging out at a nice neighbourhood cafe.  As a writer, and I include those who write code, and as a blogger ' +
			'there is something about the atmosphere of a friendly cafe that calms the nerves and stirs the creative juices. I work at home primarily ' +
			'and I feel this the best environment for a writer.  I like the control I have over the music I choose to listen to, the ability to get up ' +
			'and hit the gym for a quick workout when I feel cramped, or even stretch out on the floor to do some yoga.  Where did this idea come from that ' +
			'developers need to sit in traffic or crammed like sardines in public transit just so that they can sit in a soul destroying grey cubicle all day? ' +
			'Not for me, thanks anyway.  I do think that there is value going into a common workplace - but not on a daily basis.  Code collaboration tools are so ' +
			'good nowadays, and collaboration tools in general are so advanced that working at home is not isolating.  ' +
			'<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3FVQ1G2njrdjR-0TeqMFNar_N4ESkGZTIjhbtux6aDwUCRUQTfg" style="float:left;margin:10px">' +
			'Unless, of course, you choose that option.  Somehow the idea that a developer <strong>*turns on*</strong> at 9 am (or whenever the specified start time is) ' +
			'seems rather antiquated.  Developers work all the time.  Seriously. When a developer is ruminating on a problem, they stir over ideas and possible ' +
			'solutions 24 hrs a day.  I can think of many times I have been stuck on a particularly vexing problem, and after a good nights sleep I awake to a find ' +
			'that a solution has crystallized overnight.  This is really no secret.  As an organic chemist, I was schooled on the legend of <a href="https://en.wikipedia.org/wiki/August_Kekule" target="_blank">Kekule</a> awaking after a ' +
			'dream and suddenly solving the structure of benzene. ',
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

		//http://3.bp.blogspot.com/_npWYFgHjOaM/TSsg_cxwZdI/AAAAAAAAAHg/dIIVzAqu54Y/s320/kayakSampsonJan.png

		return {
			blogDate: 'January 9, 2011',
			abbrBlogDate: '9-1-2011',
			blogTitle: 'A winter kayak excursion',
			blogCategory: 'general, personal',
			blogAbstract: 'The blue sky and brilliant sun belied the fact that his was indeed a frigid place to be.',
			blogContent: 'Today the halfway point was along the sandy stretch of Sampsons Island that faces Nantucket sound. I beached the kayak and scrambled out of the cockpit, placing my neoprene bootie into the freezing water.The cold salt water immediately rushed into my right boot, which is designed to protect in late spring / early fall temperatures. Ouch! I sacrificed hypothermia in one set of toes, instead of a full body splash into the frigid ocean water. A prudent decision.My trip today would take me from Cotuit Landing, out past the east cut of the bay, into the unprotected waters of Nantucket Sound. A strong north wind accompanied the clear blue skies, and it made a sail out of my back while I paddled through the ebb tide. I appreciated the wind assist as my shoulder muscles became reacquainted with my Werner paddle. The neoprene dry suit I was wearing underneath my Kokatat dry suit chaffed my skin with each stroke. No doubt my multi-layer protection of neoprene and waterproof nylon was robbing me off efficiency. But should I capsize (something I had NO intention of doing) this bulky clothing would give me my only chance for survival.Before I make this sound like an episode of Bear Grylls, let me stress that I do not stray far from shore. I have a very safe layer of insulated clothing to to give me options if wind, current, or my own misdirection pushes me where I had not intended to go. These are simply uncertainties that I prepare for. In 99% of my cold water trips, I could' + '<img src="http://3.bp.blogspot.com/_npWYFgHjOaM/TSsg_cxwZdI/AAAAAAAAAHg/dIIVzAqu54Y/s320/kayakSampsonJan.png" style="float:left;margin:10px">' +
			' probably go out in any warm winter gear and have a safe, comfortable paddle - as long as I stay upright! But the reality of dangerous wilderness travel is that you need to dress for that 1% of time, 100% of the time.I moved smoothly through the cut and out into the sound. The wind that had pushed me across the bay now followed me as I paralleled the beach shore. While I appreciated the cooperation, I know I would have payback once I shifted the bow into the north at the other end of the island. But why fret? Just enjoy the ride. I expected a solitary trip, but I found myself surrounded by a variety of sea ducks. Common Eiders, Long Tailed ducks and Scoters bobbed on the surface, then dipped beneath the waves to search for some tidbit to eat.The blue sky and brilliant sun belied the fact that his was indeed a frigid place to be. But the ducks seemed completely nonplussed as they paddled with me on the choppy ocean. I marveled at how well adapted they are for this world. Everything they need to survive goes with them whenever they take flight, and that&#39;s just the feathers on their back.It makes our *need* for a 42" HDTV seem rather obscene.Just as predicted, as I turned into the west cut and nosed into the channel between Grand Island and Sampsons, the wind hit me full bore. Ouch! (again). The extra thick neoprene paddling gloves I was wearing did the best they could, but water had managed to seep in and wet my fingers. Now with each stroke, I repeatedly raised one hand high into the wind for maximum cooling, while the other dipped into the water. I could start not feeling my fingers. This might impact my ability to type this afternoon (is that a bad thing?).Paddling into the wind is a meditative experience. I shake off the frustration of having to work that much harder with each stroke, and settle into a steady rhythm. Each dig of the paddle blade elicits a grunt of effort. How slowly I move now, but I do move.It seemed a metaphor for life: be in the present; feel the rhythm in nature; paddle steadily and thoughtfully.I will move forward.',
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
			blogContent: 'I am using Flash Builder 4.0 Premium and I kept getting the following error when I sync&#39;d up to the project we are working on saying the the IValueObject cannot be found. This is apparently related to the <code>com.adobe.fiber</code> class that cannot be found.' +
			'<div class="newLine"></div>' +
			'<code>1045: Interface IValueObject was not found.</code>' +
			'<div class="newLine"></div>' +
			'Ack!' +
			'<div class="newLine"></div>' +
			'I believe the source of the problem is that another developer generated the AS3 classes for the wsdl using 4.0.1, while I am using 4.0.0.  I tried to update my version of FlashBuilder using the AdobePatchInstaller, but all it would tell me was: ' +
			'<div class="newLine"></div>' +
			'<code>&#39;Update is not applicable&#39;</code>' +
			'<div class="newLine"></div>' +
			'Crap I hate chasing around after my tail like a Labrador Retriever.  A quick look at the line causing the offending error points to the com.adobe.fiber package. What kind of name is &#39;fiber&#39; for a package?  Google the error and it is apparent that a couple of swc&#39;s need to be added.  Go to:' +
			'<div class="newLine"></div>' +
			'project properties > Flex Build Path [tab] Libary Pathand click &#39;Add SWC Folder&#39;.  Browse to your location of these FlashBuilder swc&#39;s, in my case:' +
			'<div class="newLine"></div>' +
			'<code>C:/Program Files/Adobe/Adobe Flash Builder 4 Plug-in/eclipse/plugins/com.adobe.flexbuilder.dcrad_4.0.0.272416/dcradSwcs/4.0/</code>' +
			'<div class="newLine"></div>' +
			'and add folders: locale and libs.  I can now compile with no errors. ' +
			'<div class="newLine"></div>' +
			'All good.',
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
			blogContent: 'What idiot would make their own bread?  Even worse, what idiot would make their own whole wheat bread?  I suppose ' +
			'I should put my hand up.  Humans have been making bread for (<a href="https://en.wikipedia.org/wiki/Bread#History" target="_blank">anthropologists have determined</a>) 30,000 years, so it is reasonable to assume that some things should be left to experts.  Making bread has always seemed to me to be a past-time of ' +
			'the artisan, or the product of the industrial food complex.  Bread making has become the domain of art, or "efficiency of scale".  ' +
			'<div class="newLine"></div>' +
			'<img src="http://images.bigoven.com/image/upload/t_recipe-256/artisan-bread-b4441d.jpg" style="float:left;margin:10px">' +
			'As I sat at my kitchen office working on some particularly vexing Angularjs code, my mind wandered over to a comforting thought ' +
			'"How nice it would be, sitting alone with my coding problems, to enjoy the smell of bread filling the room"  Why not?  In this age of ' +
			'instant gratification, there is a corollary: instant access to learning.  Well perhaps "instant" doesn&#39;t accurately describe making bread, but it ' +
			'describe accurately how long it takes YouTube to return a bevy of excellent breadmaking videos.  I settled on a video detailing <a href="https://www.youtube.com/watch?v=-Rjd1NZfG4Y" target="_blank">whole wheat bread</a>.  Soon (quick trip to the market notwithstanding), under the tuteladge of my YouTube advisor, ' +
			'I was watching bread yeast foaming in bathwarm water, and smelling it&#39;s beer-like aroma.  I poured the frothy liquid into a bowl of whole wheat flour ' +
			'and was rewarded with a sticky, gluey mess of dough.  Now what?  But with the guiding hand of Lester (35 years of breadmaking under his belt) I persevered. ' +
			'In the end, I was indeed rewarded with the aroma of fresh bread baking in the oven, and if I don&#39;t say so myself, it tasted pretty darned good!' +
			'<div class="newLine"></div>' +
			'The real value of making bread is seeing these simple ingrediants mix together to create something new, and tasty.  It is gratifying to tap into those ' +
			'thousands of years of breadmaking skills that our ancestors, and ancestors ancestors used to survive.  The action of kneeding, the smell and texture, the ' +
			'patience, and the pride of creating something so wonderful far outweighs standing in line at the grocery waiting to shove your debit card into the reader. ' +
			'<div class="newLine"></div>' +
			'So, I circle back to the original question: "Why build your own blog software?  For the same reasons, I suppose, I would bake my own bread.  I don&#39;t deny ' +
			'for a second that the blog software experts who have devoted tremendous amounts of time, enery and money to create a blog platform is better than mine, in the same way that the bread that comes from companies that bake bread is better than mine.  But I learned something in the process.  I am proud of what I created.  And ' +
			'I am encouraged to keep learning and exploring as I gain more confidence.  And while I&#39;m doing just that, I think I&#39;ll have nice warm slice of ' +
			'freshly baked bread with a generous slab of butter!',
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

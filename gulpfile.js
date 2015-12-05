/**
 * Created by Mike on 10/25/2015.
 */
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var batch = require('gulp-batch');
var minifyCss = require('gulp-minify-css');
//var minifyHtml = require("gulp-htmlmin");
var minifyHtml = require("gulp-minify-html");
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gutil = require('gulp-util');
var jsonminify = require('gulp-jsonminify');


// Lint Task
gulp.task('lint', function () {
	return gulp.src('src/scripts/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Minify JSON
gulp.task('json', function () {
	return gulp.src(['src/js/json/blogData.json'])
		.pipe(jsonminify())
		.pipe(gulp.dest('dist/js/json'));
});

//minify html
gulp.task('html', function () {
	gulp.src('src/html/**/*.html') // path to your files
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html'));

	// for some unknown reason, gulp decides to exclude a file from minification ??
	// so I decided to add it manually (if this can be construed as manual)
	gulp.src('src/html/partials/_blogTopic.html') // path to THIS file
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/partials/'));

	gulp.src('src/html/partials/_aboutMeTopic.html') // path to THIS file
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/partials/'));

	gulp.src('src/html/partials/_portfolioTopic.html') // path to THIS file
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/partials/'));

	gulp.src('src/html/partials/_infoWindows.html') // path to THIS file
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/partials/'));

	gulp.src('src/html/partials/_projectsTopic.html') // path to THIS file
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/partials/'));

	gulp.src('src/html/template/modal/*')// ui.bootstrap.modal
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/html/template/modal'));
});


// Watch Files For Changes
gulp.task('watch-js', function () {
	watch('src/js/**/*.js', batch(function (events, done) {
		gulp.start('scripts', done);
	}));

	watch('src/js/json/*.json', batch(function (events, done) {
		gulp.start('json', done);
	}));
});

gulp.task('images', function () {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});


gulp.task('watch-scss', function () {
	watch('src/scss/**/*.scss', batch(function (events, done) {
		gulp.start('sass', done);
	}));
});

gulp.task('watch-html', function () {
	watch('src/html/*.html', batch(function (events, done) {
		gulp.start('html', done);
	}));
});

gulp.task('watch', function () {
	gulp.start('watch-html');
	gulp.start('watch-scss');
	gulp.start('watch-js');

})


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'json', 'html', 'images', 'watch']);
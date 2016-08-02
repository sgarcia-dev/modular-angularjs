var gulp = require('gulp'),
	flatten = require('gulp-flatten'),
	concat = require('gulp-concat'),
	browserify = require('browserify'),
	vinylBuffer = require('vinyl-buffer'),
	vinylSourceStream = require('vinyl-source-stream'),
	del = require('del'),
	runSequence = require('run-sequence'),
	gutil = require('gulp-util'),
	mocha = require('gulp-mocha');

gulp.task('default', function() {
	runSequence('clean', ['bundle-css', 'bundle-js', 'copy-html'])
});

gulp.task('test', function () {
	gulp.src('test/index.js')
		.pipe(mocha());
});

gulp.task('clean', function(done) {
	return del('dist/**')
});

gulp.task('bundle-js', function(done) {
	browserify('src/index.js', {
		cache: {},
		packageCache: {}
	}).bundle()
		.on('end', function () {
			gutil.log('Browserify: Bundling completed.');
			done();
		})
		.on('error', function (err) {
			gutil.log('Browserify: Error encountered:\n', err);
			done();
		})
		.pipe(vinylSourceStream('bundle.js'))
		.pipe(vinylBuffer())
		.pipe(gulp.dest('dist'));
});

gulp.task('bundle-css', function() {
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('dist'))
});

gulp.task('copy-html', function(done) {
	gulp.src('src/**/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src(['src/**/*.html', '!src/**/index.html'])
		.pipe(flatten())
		.pipe(gulp.dest('dist/template'));
});
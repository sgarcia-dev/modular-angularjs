var gulp = require('gulp'),
	flatten = require('gulp-flatten'),
	concat = require('gulp-concat'),
	del = require('del'),
	runSequence = require('run-sequence'),
	mocha = require('gulp-mocha');

gulp.task('default', function() {
	runSequence('clean', ['bundle-css', 'bundle-js', 'copy-html'])
});

gulp.task('test', function() {
	return gulp.src('test/index.js', {read: false})
		.pipe(mocha());
});

gulp.task('clean', function(done) {
	return del('dist/**')
});

gulp.task('bundle-js', function() {
	return gulp.src(['node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'src/**/*.module.js',
		'src/app.js',
		'src/**/*.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist'))
});

gulp.task('bundle-css', function() {
	return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('dist'))
});

gulp.task('copy-html', function(done) {
	gulp.src('src/**/index.html')
		.pipe(gulp.dest('dist'));
	return gulp.src(['src/**/*.html', '!src/**/index.html'])
		.pipe(flatten())
		.pipe(gulp.dest('dist/template'));
});
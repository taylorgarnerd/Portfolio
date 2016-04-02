var gulp 		= require('gulp'),
	htmlmin 	= require('gulp-htmlmin'),
	csso 		= require('gulp-csso'),
	imagemin	= require('gulp-imagemin');

gulp.task('html', function() {
	return gulp.src('*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
});

gulp.task('copyBootstrap', function() {
	return gulp.src('CSS/bootstrap.min.css')
		.pipe(gulp.dest('dist/css'))
});

gulp.task('css', function() {
	return gulp.src('CSS/stylesheet.css')
		.pipe(csso())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('copyJS', function() {
	return gulp.src('js/*')
		.pipe(gulp.dest('dist/js'))
});

gulp.task('img', function() {
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['html', 'copyBootstrap', 'css', 'copyJS', 'img']);

gulp.task('default', ['build']);
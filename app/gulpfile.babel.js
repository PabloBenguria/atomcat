/*
* Dependencies
*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');
const babel = require('gulp-babel');
const ngAnnotate = require('gulp-ng-annotate');

/*
* Build css 
*/
gulp.task('css', function () {
  gulp.src('css/common/*.css')
  .pipe(concat('main.min.css'))
  .pipe(minifyCSS().on('error', function(error){
  	console.log(error);
  }))
  .pipe(gulp.dest('css/build/'))
});

/*
* Build common js dependencies
*/
gulp.task('common', function () {
  gulp.src('js/common/*.js')
  .pipe(concat('common.js'))
  .pipe(uglify().on('error', function(error){
  	console.log(error);
  }))
  .pipe(gulp.dest('js/build/'))
});

/*
* Build angular components
*/
gulp.task('components', function () {
  gulp.src('components/**/*.js')
  .pipe(babel())
  .pipe(ngAnnotate())
  .pipe(concat('components.min.js'))
  .pipe(uglify().on('error', function(error){
  	console.log(error);
  }))
  .pipe(gulp.dest('js/build/'))
});


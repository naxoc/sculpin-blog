'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
bourbon = require('node-bourbon'),
sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  sassFiles: 'scss/*.scss',
  cssDir: '../source/css',
  outputCss: '../output_dev/css/*.css'
};

gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'localhost:8000',
    open: false
  });
});

gulp.task('sass', function () {
  return gulp.src(paths.sassFiles)
    .pipe(sourcemaps.init())

    .pipe(sass({
      includePaths: bourbon.includePaths,
      require: ['normalize-scss'],
      errLogToConsole: true
    }))

    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('listen', function() {
  return gulp.src(paths.outputCss)
  .pipe(reload({
    stream: true
  }));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch(paths.sassFiles, ['sass']);
  gulp.watch(paths.outputCss, ['listen']);
});

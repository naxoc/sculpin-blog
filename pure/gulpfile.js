'use strict';

var gulp = require("gulp"),
bourbon = require("bourbon").includePaths,
sass = require("gulp-sass"),
sourcemaps = require('gulp-sourcemaps');

var paths = {
  sassFiles: 'scss/*.scss',
  cssDir: '../source/css',
  mapsDir: '../maps',
  outputCss: '../output_dev/css/*.css'
};

gulp.task('sass', function () {
  return gulp.src(paths.sassFiles)
    .pipe(sourcemaps.init())

    .pipe(sass({
      includePaths: bourbon,
      require: ['normalize-scss'],
      outputStyle: 'compressed',
      errLogToConsole: true
    }))

    .pipe(sourcemaps.write(paths.mapsDir))
    .pipe(gulp.dest(paths.cssDir));
});


// Default task to be run with `gulp`
gulp.task('default', ['sass'], function () {
  gulp.watch(paths.sassFiles, ['sass']);
});

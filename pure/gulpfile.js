const gulp = require("gulp"),
  bourbon = require("bourbon").includePaths,
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps");

const paths = {
  sassFiles: "scss/*.scss",
  cssDir: "../source/css",
  mapsDir: "../maps",
  outputCss: "../output_dev/css/*.css",
};

gulp.task(
  "sass",
  gulp.series(() =>
    gulp
      .src(paths.sassFiles)
      .pipe(sourcemaps.init())

      .pipe(
        sass({
          includePaths: bourbon,
          require: ["normalize-scss"],
          outputStyle: "compressed",
          errLogToConsole: true,
        })
      )

      .pipe(sourcemaps.write(paths.mapsDir))
      .pipe(gulp.dest(paths.cssDir))
  )
);

gulp.task('watch', function () {
  gulp.watch(
    [paths.sassFiles],
    { usePolling: true, interval: 1000 },
    gulp.series('sass')
  );
});
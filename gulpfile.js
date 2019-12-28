// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task('css', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(gulp.dest('./src/_includes/'));
});

/*
  Watch folders for changes
*/
gulp.task("watch", function () {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  // gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});
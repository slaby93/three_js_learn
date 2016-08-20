const gulp = require('gulp');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');

gulp.task('webserver', function () {
  gulp.src('./src')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
gulp.task('babel', () => {
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: [ 'es2015' ]
    }))
    .pipe(gulp.dest('./dist'));
});
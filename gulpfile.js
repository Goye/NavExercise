var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('public/', {read: false})
      .pipe(clean());
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('public/fonts'))
});

gulp.task('data', function() {
  return gulp.src('app/data/**/*')
  .pipe(gulp.dest('public/data'))
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
  .pipe(gulp.dest('public/images'))
});

gulp.task('assets', ['fonts', 'data', 'images']);




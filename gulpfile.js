// gulpfile.js
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
//for css manipulation
 var importCss = require('gulp-import-css');
 
gulp.task('build', function () {
  return browserify({
    entries: 'app.js',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('./dist/bundle.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(cb) {
  runSequence('build','compress', cb);
//css
    gulp.src('assets/*.css')
    .pipe(importCss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch("./*.js", ['default']);
  gulp.watch("./components/*.jsx", ['default']);
  gulp.watch("./dispatcher/*.js", ['default']);
  gulp.watch("./stores/*.js", ['default']);
});

var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});

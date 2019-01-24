var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


sass.compiler = require('node-sass')

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('styles', function () {
  return gulp.src(['src/css/**/*.scss', 'src/css/**/*.css'])
    // eslint-disable-next-line no-param-reassign
    .pipe(rename((filePath) => { filePath.basename += '-bundle'; }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('html', function () {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('live-reload', ['scripts', 'styles', 'html'], function (done) {
  browserSync.reload();
  done();
});

// watch task
// watches js
gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['scripts', 'live-reload']);
  gulp.watch('src/css/*.scss', ['styles', 'live-reload']);
  gulp.watch('src/html/*.html', ['html', 'live-reload']);
});

gulp.task('default', ['scripts', 'styles', 'html', 'watch', 'server']);

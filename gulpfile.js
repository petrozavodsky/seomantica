var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    plugins = require('gulp-load-plugins')();
    wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
        directory: 'app/bower_components',
    }))
    .pipe(gulp.dest('./app'));
});


gulp.task('html', function () {
  var assets = useref.assets();
  return gulp.src('app/*.html')
      .pipe(assets)
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(gulp.dest('dist'));
});


gulp.task('less', function () {
    return gulp.src('./app/less/*.less')
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer(['last 3 versions', 'ie 10', 'opera 12']))
        .pipe(plugins.csso())
        .pipe(plugins.rename('main.css'))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function(){
    gulp.watch('bower.json', ['bower']);
    gulp.watch(['./app/**/*.less'], ['less']);
});
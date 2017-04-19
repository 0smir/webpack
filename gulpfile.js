var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');
var sass = require('gulp-sass');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

//webpak
var gutil = require('gulp-util');
var webpack_stream = require('webpack-stream');
var webpack_config = require('./webpack.config');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

// html
gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

//css
gulp.task('css', function () {
    gulp.src('src/scss/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 5 version', 'ie 9'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


//img
gulp.task('img', function () {
    gulp.src('src/img/**/')
        .pipe(gulp.dest('dist/img'));
});



//fonts
gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
});


// clean
gulp.task('clean', function() {
    return del('dist');
});

//js
gulp.task('webpack', function () {
    // gulp.src('src/js/bundle.js')
    webpack_stream(webpack_config)
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


// watch
gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html', 'reload']);
    gulp.watch('src/**/*.scss', ['css', 'reload']);
    gulp.watch('src/js/**', ['webpack', 'reload']);
    gulp.watch('src/imgages/**', ['img', 'reload']);
    gulp.watch('src/fonts/**', ['fonts','reload']);
    browserSync.reload();
});

gulp.task('reload', function() {
    gulp.watch(['src/*.html', 'src/*.scss', 'src/*.js'],
        {cwd: ''},
        reload);
});

//default
gulp.task('default', [ 'browser-sync', 'css','html', 'img', 'fonts', 'webpack', 'watch','reload']);
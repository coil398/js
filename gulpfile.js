'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync');

function errorHandler(err) {
    console.log('Error: ' + err.message);
}

gulp.task('browser-sync', function() {
    browserSync({
        proxy: {
            target: 'http://localhost:3000'
        },
        port: 8080
    });
});

gulp.task('browserify', () => {
    browserify('./src/index.jsx', {debug: true})
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .on('error', errorHandler)
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('server', function() {
    var server = gls.new('./server.js');
    server.start();
});

gulp.task('watch', function(){
    gulp.watch('./src/*.jsx', ['browserify']);
    gulp.watch('./index.html', ['browserify']);
});

gulp.task('default', ['browserify', 'watch', 'server', 'browser-sync']);

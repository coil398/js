'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('browserify', function() {
    browserify('./src/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function(){
    gulp.watch('./src/*.jsx', ['browserify'])
});

gulp.task('webserver', function(){
    gulp.src('./')
    .pipe(webserver({
        host: 'localhost',
        livereload: true
    })
);
});

gulp.task('default', ['browserify', 'watch', 'webserver']);

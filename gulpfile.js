'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var through = require('through2');

gulp.task('default', function(){
        var bundledStream = through();

        bundledStream
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist'));

        globby(['./src/*.js']).then(function(entries){
            var b = browserify({
                entries: entries,
            });

            b.bundle().pipe(bundledStream);
    }).catch(function(err){
        bundledStream.emit('error', err);
    });

    return bundledStream;
});

gulp.task('watch', function(){
    gulp.watch('./src/*.js',['default']);
});

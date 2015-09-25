'use strict';

// http://macr.ae/article/splitting-gulpfile-multiple-files.html (approach 2)

var config = {
    nodeDir: './node_modules',
    scriptsDir: './app/public/scripts',
    tempDir: './temp'
};

// not gulp plugins
var modules = {
    browserify: require('browserify'),
    fs: require('fs'),
    glob: require('glob'),
    vinylSourceStream: require('vinyl-source-stream')
};

// gulp and plugins
var gulp = require('gulp');
var gulpPlugins = require('gulp-load-plugins')({ scope: 'devDependencies' });

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, gulpPlugins, modules, config);
}

gulp.task('sass', getTask('sass'));
gulp.task('sfdata-tbd', getTask('sfdata-tbd'));
gulp.task('spotify', getTask('spotify'));

gulp.task('contractors:app', getTask('contractors/app.js'));
gulp.task('contractors:test', getTask('contractors/test.js'));

gulp.task('photos', ['photos:lib', 'photos:server', 'photos:browser']);
gulp.task('photos:lib', getTask('photos/lib.js'));
gulp.task('photos:server', getTask('photos/server.js'));
gulp.task('photos:browser', getTask('photos/browser.js'));

gulp.task('watch', ['sass', 'sfdata-tbd', 'spotify', 'contractors:app', 'photos'], function() {
    gulp.watch('./app/public/stylesheets/*.scss', ['sass']);
    gulp.watch(config.scriptsDir + '/sfdata/src/*.js', ['sfdata-tbd']);
    gulp.watch(config.scriptsDir + '/spotify/app-src/*.js', ['spotify']);
    gulp.watch('public/scripts/contractors/app-src/**/*.js', ['contractors:app']);
    gulp.watch('views/jsx/**/*.jsx', ['photos:server', 'photos:browser']);
});

gulp.task('default', ['watch']);

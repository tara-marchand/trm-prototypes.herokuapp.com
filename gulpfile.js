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
    browserSync: require('browser-sync').create(),
    fs: require('fs'),
    glob: require('glob'),
    vinylSourceStream: require('vinyl-source-stream'),
    precss: require('precss'),
    autoprefixer: require('autoprefixer'),
    exec: require('child_process').exec
};

// gulp and plugins
var gulp = require('gulp');
var gulpPlugins = require('gulp-load-plugins')({ scope: 'devDependencies' });

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, gulpPlugins, modules, config);
}

gulp.task('postcss', getTask('postcss'));
gulp.task('sfdata-tbd', getTask('sfdata-tbd'));
gulp.task('spotify', getTask('spotify'));

gulp.task('contractors:app', getTask('contractors/app.js'));
gulp.task('contractors:test', getTask('contractors/test.js'));

gulp.task('photos', ['photos:lib', 'photos:server', 'photos:browser']);
gulp.task('photos:lib', getTask('photos/lib.js'));
gulp.task('photos:server', getTask('photos/server.js'));
gulp.task('photos:browser', getTask('photos/browser.js'));

gulp.task('watch', ['postcss', 'sfdata-tbd', 'spotify', 'contractors:app', 'photos'], function() {
    // modules.browserSync.init({
    //     proxy: 'localhost:3000'
    // });
    gulp.watch('./styles-src/*.css', ['postcss']);
    gulp.watch(config.scriptsDir + '/sfdata/src/*.js', ['sfdata-tbd']);
    gulp.watch(config.scriptsDir + '/spotify/app-src/*.js', ['spotify']);
    gulp.watch('public/scripts/contractors/app-src/**/*.js', ['contractors:app']);
    gulp.watch('views/jsx/**/*.jsx', ['photos:server', 'photos:browser']);
    // gulp.watch('app/views/**/*.*').on('change', modules.browserSync.reload);
});

gulp.task('mongo', function() {
    modules.exec('mongod', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        }
    });
});

gulp.task('nodemon', ['mongo'], function () {
    var started = false;

    return gulpPlugins.nodemon({
        script: 'app/app.js',
        ignore: ['app/public/**/*', 'app/templates/**/*'],
        watch: 'app/**/*'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        if (!started) {
            started = true;
        }
    });
});

gulp.task('browser-sync', ['nodemon'], function() {
    modules.browserSync.init(null, {
        proxy: 'http://localhost:3000',
        files: ['app/public/**/*.*'],
        browser: 'google chrome',
        port: 5000
    });
});

gulp.task('serve', ['browser-sync']);
gulp.task('default', ['serve']);

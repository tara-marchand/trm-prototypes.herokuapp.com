'use strict';

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        var contractorsDir = config.scriptsDir + '/contractors';

        modules.browserify({
                debug: true,
                exclude: ['jquery', 'underscore', 'backbone', 'firebase'],
                entries: contractorsDir + '/app-src/app.js',
                transform: ['envify']
            })
            .bundle()
            .pipe(modules.vinylSourceStream('contractors-app.js'))
            .pipe(modules.vinylBuffer())
            .pipe(gulpPlugins.sourcemaps.init({ loadMaps: true }))
            .pipe(gulpPlugins.babel({
                presets: ['es2015']
            }))
            .pipe(gulpPlugins.sourcemaps.write('./'))
            .pipe(gulp.dest(contractorsDir));
    };
};

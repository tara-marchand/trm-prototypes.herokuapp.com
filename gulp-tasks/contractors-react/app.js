'use strict';

var reactify = require('reactify');

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        var contractorsReactDir = config.scriptsDir + '/contractors-react';

        modules.browserify(
            {
                debug: true,
                entries: contractorsReactDir + '/app-src/app.jsx',
                transform: ['reactify'],
                extensions: ['.jsx']
            })
            .transform(reactify)
            .bundle()
            .pipe(modules.vinylSourceStream('contractors-react-app.js'))
            .pipe(modules.vinylBuffer())
            .pipe(gulpPlugins.sourcemaps.init({ loadMaps: true }))
            .pipe(gulpPlugins.babel({
                presets: ['es2015']
            }))
            .pipe(gulpPlugins.sourcemaps.write('./'))
            .pipe(gulp.dest(contractorsReactDir));
    };
};

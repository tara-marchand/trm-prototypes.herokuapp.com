'use strict';

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        var spotifyScriptsDir = config.scriptsDir + '/spotify';

        modules.browserify({
                debug: true,
                exclude: ['jquery', 'underscore', 'backbone'],
                entries: spotifyScriptsDir + '/app-src/app.js'
            })
            .bundle()
            .pipe(modules.vinylSourceStream('spotify-app.js'))
            .pipe(gulp.dest(spotifyScriptsDir));
    };
};

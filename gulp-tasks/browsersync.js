'use strict';

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        modules.browserSync.init({
            server: './app/app.js'
        });
    };
};

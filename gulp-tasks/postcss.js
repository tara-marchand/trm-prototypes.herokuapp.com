'use strict';

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        var processors = [modules.autoprefixer, modules.precss];
        gulp.src('./styles-src/*.css')
            .pipe(gulpPlugins.postcss(processors))
            .pipe(gulp.dest('./app/public/styles'));
    };
};

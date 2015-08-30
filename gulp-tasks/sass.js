'use strict';

module.exports = function (gulp, gulpPlugins, modules, config) {
    return function () {
        gulp.src('./public/stylesheets/*.scss')
            .pipe(gulpPlugins.sass())
            .pipe(gulpPlugins.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('./public/stylesheets'));
    };
};

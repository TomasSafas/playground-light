const gulp = require("gulp"),
    config = require("../gulp.config.js")(),
    sassLint = require("gulp-sass-lint");

module.exports = function() {
    return gulp.src(config.scss.src)
        .pipe(sassLint(
            {
                rules: {
                    "no-css-comments": false
                }
            }
        ))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
};
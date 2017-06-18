const gulp = require("gulp"),
    config = require("../gulp.config.js")(),
    plumber = require("gulp-plumber"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    gutil = require('gulp-util');

module.exports = function() {
    let options = {
        outputStyle: "nested",
        sourceComments: false
    };

    return gulp.src(config.scss.src)
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log(err);
                this.emit("end");
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(options)
            .on("error", sass.logError)
        )
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(config.scss.dest));
};
const gulp = require("gulp"),
    gutil = require('gulp-util');

// Load watcher tasks from gulp-tasks folder, watchers subdirectory
require("gulp-task-loader")();

gulp.task("default", function() {
    gutil.log("Gulp is working!");
});
const runSequence = require("run-sequence");

module.exports = function(callback) {
    runSequence("lint-scss", "watch-scss", callback);
};
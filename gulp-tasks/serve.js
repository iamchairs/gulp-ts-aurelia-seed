var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

module.exports = function(gulp, config) {
  gulp.task('serve', function() {
    connect.server({
      root: config.paths.src,
      livereload: true
    });
  });
};
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp, config) {
  gulp.task('ts', function() {
    return gulp.src([config.paths.jspmTsd, config.paths.ts, config.paths.tsd, '!' + config.paths.jspmTypescriptTsd])
        .pipe(sourcemaps.init())
        .pipe(ts(ts.createProject(config.paths.tsConfig)))
        .js
        .pipe(sourcemaps.write(config.sourcemaps))
        .pipe(gulp.dest(config.paths.tmp));
  });
};
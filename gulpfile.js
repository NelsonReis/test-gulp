var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

var options = { 
    remoteUrl: "https://github.com/nelsonreis/test-gulp.github.io.git",
    branch: "master" };
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy(options))
});

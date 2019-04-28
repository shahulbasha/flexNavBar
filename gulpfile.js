const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", () => {
  gulp
    .src("main.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("main.css", gulp.series("styles"));
});

var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('compile', function () {
    return gulp.src('ts/**/*.ts')
        .pipe(ts({
            module: "commonjs",
            target: "es5",
            sourceMap: false,
            declaration: false,
            fast: "never",
            verbose: true
        }))
        .pipe(gulp.dest('js/'));
});
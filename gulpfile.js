var gulp = require('gulp');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');
 
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

gulp.task('mocha', ['compile'], function () {
    return gulp.src('js/tests/**.js', {read: false})
        .pipe(mocha());
});

gulp.task('default', ["compile", "mocha"])
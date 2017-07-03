const gulp = require("gulp");

const babel = require("gulp-babel");
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const del = require('del');
const notify = require('gulp-notify');

gulp.task('build', ['clean'], () => {
    console.log("starting javascript build...");
    return gulp.src(['**/*.js', '!node_modules/**', '!**/*gulpfile.js'], {base: 'src'})
        .pipe(babel())
        .pipe(gulp.dest('src/js-temp'))

        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())

        .pipe(uglify())
        .pipe(gulp.dest('src/js-temp'))

        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('js'))

        .pipe(notify({message: 'completed build'}))
});

/*
 clean is a callback to build, ensuring that clean runs AFTER build
 works because clean is started, pushed onto the event loop stack, then runs after build returns
 */
gulp.task('clean', () => {
    return del(['src/js-temp/*.js', 'js/*.js', 'dist/*.js', 'dist/**/*.js']);
});

gulp.task("default",
    ['build']);




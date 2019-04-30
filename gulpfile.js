const gulp = require('gulp');
const sass = require('gulp-sass');



function style() {
    return gulp.src('./docs/app/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./docs/app/styles/css/'))
}


exports.style = style;
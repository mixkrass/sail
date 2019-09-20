const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('./assets/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('clean', () => {
    return del([
        './public/css/ain.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('./assets/styles/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});
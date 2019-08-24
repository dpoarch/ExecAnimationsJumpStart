var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');

//Sources
var introSass = ['scss', 'intro', 'steps', 'founders', 'testimonies', 'purchase', 'footer'];

//SCSS tasks
gulp.task('sass-intro', function (done) {
    introSass.forEach((el) => {
        if (el === 'scss') {
            return gulp.src(`${el}/*.scss`).pipe(sass()).pipe(cleanCSS({compatibility: 'ie8'})).pipe(gulp.dest('./css'))
        }
        return gulp.src(`${el}/*.scss`).pipe(sass()).pipe(cleanCSS({compatibility: 'ie8'})).pipe(gulp.dest(`./${el}`))
    });
    done();
});

//Watch CSS
gulp.task('watch', function (done) {
    introSass.forEach((el) => {
        gulp.watch(`${el}/*.scss`, gulp.series('sass-intro'));
    });
    done();
});


//Server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


//Default task, no reload
gulp.task('default', gulp.parallel('serve', 'watch'));
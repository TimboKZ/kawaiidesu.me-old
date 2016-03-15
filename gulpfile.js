var gulp = require('gulp');
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function () {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('default', ['browserSync', 'sass', 'ts'], function () {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/ts/**/*.ts', ['ts']);
    gulp.watch('index.html', browserSync.reload);
});
var gulp = require('gulp')
var path = require('path')
var babel = require('gulp-babel')
var compass = require('gulp-compass')
gulp.task('watch', function () {
    //处理未捕获的异常，防止watch退出
    process.on('uncaughtException', function (err) {
        console.log('err', err)
        console.log('err.stack', err.stack)
    })
    gulp.watch('src/**/*.*', function (event) {
        if (/\.js$/.test(event.path)) {
            gulp
                .src(event.path, {
                    base: path.join(__dirname, 'src')
                })
                .pipe(babel())
                .pipe(gulp.dest('lib'))
        } else if (/\.scss$/.test(event.path)) {
            gulp
                .src(event.path, {
                    base: path.join(__dirname, 'src')
                })
                .pipe(compass({
                    config_file: './config.rb',
                    sass: 'src',
                    css: 'example'
                }))
                .pipe(gulp.dest('dist'))
        } else {
            gulp
                .src(event.path, {
                    base: path.join(__dirname, 'src')
                })
                .pipe(gulp.dest('dist'))
        }
    })
})
gulp.task('default', function () {
    gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'))
    gulp
        .src('src/**/!(*.js)')
        .pipe(gulp.dest('lib'))
})
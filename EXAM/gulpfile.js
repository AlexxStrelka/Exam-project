var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoPrefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var rigger = require('gulp-rigger');
var sourceMaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var watch = require('gulp-watch');

gulp.task('sass', function() {
    return sass('src/main.scss')
        .on('error', sass.logError)
        // .pipe(sourceMaps.init({loadMaps: false}))
        .pipe(autoPrefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        // .pipe(rename('app.css'))
        .pipe(cleanCSS())
        // .pipe(sourceMaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/css/fonts'))
});

gulp.task('images', function(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/css/img'))
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js'])
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('build/js'));
});

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

// gulp.task('stream', function () {
//     // Endless stream mode 
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
 
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });

gulp.task('default', function() {
    gulp.start('pages', 'sass', 'images', 'fonts', 'scripts');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/**/**/*.scss', ['sass']);
    gulp.watch('src/img', ['images']);
    gulp.watch('src/js/*.js', ['scripts']);
});
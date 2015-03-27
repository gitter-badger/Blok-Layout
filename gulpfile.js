var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var stylesDocs  = require('gulp-sassdoc');

// Global namespace:
var BlokLayout   = {};

console.log('==========================================');
console.log('Building Blok Layout ...');
console.log('==========================================');

BlokLayout.build = function () {
    console.log('Buildng SASS styles.');

    gulp.src('sass/*.scss')
    .pipe(sass({
        //style: 'expanded',
        cacheLocation: 'cache/sass/',
        sourcemapPath: 'src/*.scss'
    }))
    .on('error', function (err) {
        console.log('SASS Error:', err.message);
    })
    .pipe(gulp.dest('../dist'));

    console.log('Done buildng SASS styles.');
};

gulp.task('default', BlokLayout.build());

gulp.task('watch', ['watchSASS'], BlokLayout.build());

gulp.task('watchSASS', function() {
    gulp.watch('sass/*.scss', ['styles']);
});

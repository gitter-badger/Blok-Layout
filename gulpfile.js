var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var stylesDocs  = require('sassdoc');

// Global namespace:
var BlokLayout   = {};

console.log('==========================================');
console.log('Building Blok Layout ...');
console.log('==========================================');

BlokLayout.build = function () {
    return sass('./src', {
        //style: 'expanded',
        cacheLocation: './cache/sass/'
    })
    .pipe(gulp.dest('./dist/'))
    .on('error', function (err) {
        console.log('SASS Error:', err.message);
    });
};

gulp.task('default', function() {
    BlokLayout.build();
});

gulp.task('watch', ['watchSASS'], function() {
    BlokLayout.build();
});

gulp.task('sassdoc', function () {
  var options = {
    dest: './docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    }
  };

  return gulp.src('./src/*.scss')
    .pipe(sassdoc(options));
});

gulp.task('watchSASS', function() {
    gulp.watch('src/*.scss', ['watch']);
});

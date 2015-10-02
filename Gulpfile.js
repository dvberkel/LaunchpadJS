var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function(){
    return gulp.src(['src/launchpad.js'])
        .pipe(concat('launchpad.js', { newLine: ';' }))
        .pipe(gulp.dest('./'));
});

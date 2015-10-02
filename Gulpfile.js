var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var template = require('gulp-template');
var KarmaServer = require('karma').Server;

var bower = require('./bower.json');

var dist_dir = './'
var dist_file = 'launchpad.js';

gulp.task('version', function(){
    return gulp.src('template/version.js')
        .pipe(template(bower))
        .pipe(gulp.dest('src/'));
});

gulp.task('concat', ['version'], function(){
    return gulp.src(['src/**.js'])
        .pipe(concat(dist_file, { newLine: ';' }))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('compress', ['concat'], function(){
    return gulp.src(dist_file)
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('test', ['compress'], function(done){
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start()
});

gulp.task('tdd', ['compress'], function(done){
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start()
});

gulp.task('default', ['compress'], function(){
    /* noting to do here */
});

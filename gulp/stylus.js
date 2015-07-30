var cleanCss = require('gulp-minify-css');
var gulp = require('gulp');
var stylus = require('gulp-stylus');

var config = require('./config.js');

function buildStylus () {
    console.log('Compiling stylus…');

    gulp.src(config.srcDir('styl/tassel.styl'))
        .pipe(stylus())
        .pipe(cleanCss({
            keepBreaks: true,
            restructruring: false,
            roundingPrecision: -1
        }))
        .pipe(gulp.dest(config.buildDir('stylesheets')));
}

function watchAndBuildStylus () {
    gulp.watch(config.srcDir('styl/*.styl'), buildStylus);
}


module.exports = {
    once: buildStylus,
    watch: watchAndBuildStylus
};

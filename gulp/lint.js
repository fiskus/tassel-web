var gulp = require('gulp');
var eslint = require('gulp-eslint');

var config = require('./config.js');

function lint () {
    return gulp.src(config.srcDir('js/**'))
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
}

function watchAndLint () {
    gulp.watch([config.srcDir('js/*.js'), config.srcDir('js/*/*.js')], lint);
}

module.exports = {
    once: lint,
    watch: watchAndLint
};

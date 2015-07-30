var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var config = require('./config.js');
var i18n = require('./i18n.js');

function buildJavascript (bundler) {
    console.log('Compiling javascript…');

    var buildDir = config.buildDir('javascripts');
    return bundler
        .transform(i18n)
        .bundle()
        .pipe(source('tassel.js'))
        .pipe(gulp.dest(buildDir));
}

function initBrowserify (opts) {
    return browserify(config.srcDir('js/tassel.js'), opts);
}


function buildJavascriptOnce () {
    return buildJavascript(initBrowserify());
}

function buildJavascriptAndWatch () {
    watchify.args.debug = true;
    var bundler = watchify(initBrowserify(watchify.args))
            .on('update', function () {
                buildJavascript(bundler);
            });

    buildJavascript(bundler);
}

module.exports = {
    watch: buildJavascriptAndWatch,
    once: buildJavascriptOnce
};

var gulp = require('gulp');

var tasks = {
    javascript: require('./gulp/javascript.js'),
    // lint: require('./gulp/lint.js'),
    // test: require('./gulp/test.js'),
    stylus: require('./gulp/stylus.js')
};

gulp.task('js', tasks.javascript.once);
// gulp.task('lint', tasks.lint.once);
gulp.task('styl', tasks.stylus.once);
// gulp.task('test', tasks.test.once);

gulp.task('watch-js', tasks.javascript.watch);
// gulp.task('watch-lint', tasks.lint.watch);
gulp.task('watch-styl', tasks.stylus.watch);

// gulp.task('watch', ['watch-js', 'watch-lint', 'watch-stylus']);
gulp.task('watch-no-lint', ['watch-js', 'watch-styl']);

// gulp.task('dev', ['lint', 'stylus', 'watch']);
gulp.task('dev-no-lint', ['styl', 'watch-no-lint']);

gulp.task('default', ['js', 'styl']);

var MessageFormat = require('messageformat');
var through = require('through');

function i18n (file) {
    var templateExtension = /i18n.*\.(json)$/;
    if (!templateExtension.test(file)) {
        return through();
    }

    function transform (buf) {
        var mf = new MessageFormat('ru');
        var body = '(function() {' +
                'var i18n = ' + mf.functions() + ';' +
                'return' + mf.precompileObject(JSON.parse(buf.toString())) +
                '})();';
        this.push(body);
    }

    return through(transform);
}

module.exports = i18n;

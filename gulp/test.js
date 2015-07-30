var karma = require('karma').server;
var path = require('path');

function test (done) {
    karma.start({
        configFile: path.join(__dirname, '../karma.conf.js'),
        singleRun: true
    }, done);
}

module.exports = {
    once: test
};

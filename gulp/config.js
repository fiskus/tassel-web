var path = require('path');

function buildDir (str) {
    return path.join(__dirname, '../assets', str);
}

function srcDir (str) {
    return path.join(__dirname, '../frontend', str);
}

module.exports = {
    buildDir: buildDir,
    srcDir: srcDir
};

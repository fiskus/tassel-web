var Promise = require('bluebird');
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');

var DB = require('../db/index.js');

function renderJson (res, json) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(json);
}

function getTitle (url) {
    return new Promise(function (resolve, reject) {
        var method = url.indexOf('https://') === 0 ? https : http;
        method.get(url, function (res) {
            var content;
            res.on('error', reject);
            res.on('data', function (data) {
                content += data;
            });
            res.on('end', function () {
                var title = cheerio.load(content)('title').text();
                resolve(title);
            });
        });
    });
}

function Update (req, res) {
    var url = req.body.url;
    getTitle(url)
        .then(function (title) {
            return new DB.Bookmarks({
                url: url,
                title: title,
                userId: req.session.passport.user
            }).save();
        })
        .then(function () {
            renderJson(res, {
                success: true,
                title: title,
                url: url
            });
        });
}

module.exports = Update;

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
    var titleClosure;
    getTitle(url)
        .then(function (title) {
            titleClosure = title;
            return new DB.RootBookmarks({
                url: url,
                title: title,
                userId: req.session.passport.user
            }).save();
        })
        .then(function () {
            renderJson(res, {
                success: true,
                title: titleClosure,
                url: url
            });
        }, function (err) {
            renderJson(res, {
                error: true,
                message: err,
                title: titleClosure,
                url: url
            });
        });
}

module.exports = Update;

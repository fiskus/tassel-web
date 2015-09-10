var Promise = require('bluebird');
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');

var DB = require('../db/index.js');
var Stream = require('../../helpers/stream.js');

function Update (req, res) {
    var url = req.body.url;
    getTitle(url)
        .then(function (title) {
            var response = {
                title: title,
                url: url
            };
            return updateDB(req.session.passport.user, url, title)
                .then(function () {
                    response.success = true;
                    return response;
                }, function (err) {
                    response.error = true;
                    response.message = err;
                    return response;
                });
        })
        .then(function (response) {
            renderJson(res, response);
        }, function (err) {
            renderJson(res, {
                error: true,
                message: err
            });
        });
}

function renderJson (res, json) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(json);
}

function updateDB (userId, url, title) {
    return new DB.RootBookmarks({
        url: url,
        title: title,
        userId: userId
    }).save();
}

function getTitle (url) {
    return new Promise(function (resolve) {
        var method = url.indexOf('https://') === 0 ? https : http;
        method.get(url, function (res) {
            Stream(res)
                .then(content => {
                    try {
                        var DOM = cheerio.load(content);
                        var title = DOM('title').text();
                        resolve(title);
                    } catch (e) {
                        resolve(url);
                    }
                }, () => {
                    resolve(url);
                });
        });
    });
}

module.exports = Update;

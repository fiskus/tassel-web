var DBBookmarks = require('../db/bookmarks.js');

function renderJson (res, json) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(json);
}

function Query (req, res) {
    DBBookmarks.fetchAll().then(function (bookmarks) {
        var urls = bookmarks.map(function (bookmark) {
            return {
                title: bookmark.get('title'),
                url: bookmark.get('url')
            };
        });
        renderJson(res, urls);
    });
}


module.exports = Query;

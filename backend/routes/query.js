var DB = require('../db/index.js');

function renderJson (res, json) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(json);
}

function serialize (bookmarks) {
    return bookmarks.map(function (bookmark) {
        return {
            title: bookmark.get('title'),
            url: bookmark.get('url')
        };
    });
}

function Query (req, res) {
    if (req.isAuthenticated()) {
        DB.RootBookmarks
            .where({
                userId: req.session.passport.user
            })
            .fetchAll()
            .then(serialize)
            .then(function (bookmarks) {
                renderJson(res, bookmarks);
            });
    } else {
        renderJson(res, []);
    }
}


module.exports = Query;

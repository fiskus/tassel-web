var DB = require('../db/index.js');

function renderJson (res, json) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(json);
}

function Update (req, res) {
    var url = req.body.url;
    new DB.Bookmarks({
        url: url
    })
        .save()
        .then(function () {
            renderJson(res, {
                success: true
            });
        });
}

module.exports = Update;

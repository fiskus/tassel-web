var knex = require('knex');
var bookshelf = require('bookshelf');

var userDBSettings = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tasselBookmarks',
        charset: 'UTF8_GENERAL_CI'
    }
};

var BookmarksDB = bookshelf(knex(userDBSettings));

var Bookmark = BookmarksDB.Model.extend({
    tableName: 'bookmarks',
    idAttribute: 'markId'
});

module.exports = Bookmark;

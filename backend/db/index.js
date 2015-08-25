var knex = require('knex');
var bookshelf = require('bookshelf');

var DBSettings = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tasselWeb',
        charset: 'UTF8_GENERAL_CI'
    }
};

var DB = bookshelf(knex(DBSettings));

var Users = DB.Model.extend({
    tableName: 'users',
    idAttribute: 'userId'
});

var Bookmarks = DB.Model.extend({
    tableName: 'bookmarks',
    idAttribute: 'markId'
});

module.exports = {
    Users: Users,
    Bookmarks: Bookmarks
};

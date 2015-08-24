var knex = require('knex');
var bookshelf = require('bookshelf');

var userDBSettings = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tasselUsers',
        charset: 'UTF8_GENERAL_CI'
    }
};

var UsersDB = bookshelf(knex(userDBSettings));

var User = UsersDB.Model.extend({
    tableName: 'users',
    idAttribute: 'userId'
});

module.exports = User;

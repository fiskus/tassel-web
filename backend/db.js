var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tasselUsers',
        charset: 'UTF8_GENERAL_CI'
    }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'userId'
});

module.exports = {
    User: User
};

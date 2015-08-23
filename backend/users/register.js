var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

var DB = require('../db.js');

function requestUser (username) {
    return new DB.User({
        username: username
    }).fetch();
}

function Register (username, password) {
    return requestUser(username).then(function (existedUser) {
        if (existedUser) {
            throw new Error('Username already exists');
        } else {
            return bcrypt.hash(password).then(function (hash) {
                return new DB.User({
                    username: username,
                    password: hash
                });
            }).then(function (newUser) {
                newUser.save();
            });
        }
    });

}

module.exports = Register;

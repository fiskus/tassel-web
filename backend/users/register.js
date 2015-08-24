var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

var DBUser = require('../db/users.js');

function noop () {}

function requestUser (username) {
    return new DBUser({
        username: username
    }).fetch();
}

function registerUser (username, password) {
    return new Promise(function (resolve, reject) {
        bcrypt.hash(password, '', noop, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                var newUser = new DBUser({
                    username: username,
                    password: hash
                });
                resolve(newUser);
            }
        });
    });
}

function Register (username, password) {
    return requestUser(username)
        .then(function (existedUser) {
            if (existedUser) {
                throw new Error('Username already exists');
            } else {
                return registerUser(username, password);
            }
        })
        .then(function (newUser) {
            newUser.save();
            return newUser;
        });
}

module.exports = Register;

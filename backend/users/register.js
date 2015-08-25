var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

var DB = require('../db/index.js');

function noop () {}

function requestUser (username) {
    return new DB.Users({
        username: username
    }).fetch();
}

function registerUser (username, password) {
    return new Promise(function (resolve, reject) {
        bcrypt.hash(password, '', noop, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                var newUser = new DB.Users({
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

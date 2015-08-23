var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

var DB = require('../db.js');

function getRegister (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('register', {
            title: 'Register'
        });
    }
}

function requestUser (username) {
    return new DB.User({
        username: username
    }).fetch();
}

function registerUser (username, password) {
    return bcrypt.hash(password)
        .then(function (hash) {
            return new DB.User({
                username: username,
                password: hash
            });
        });
}

function renderError (req, res) {
    var errorMessage = 'Username already exists';
    res.render('register', {
        title: 'Register',
        errorMessage: errorMessage
    });
    return new Error(errorMessage);
}

function postRegister (req, res) {
    var user = req.body;
    return requestUser(user.username)
        .then(function (existedUser) {
            if (existedUser) {
                return renderError(req, res);
            } else {
                return registerUser(user.username, user.password);
            }
        })
        .then(function (signUpUser) {
            signUpUser.save();
            res.redirect('/login');
        }, function () {
            // Nothing
        });
}

module.exports = {
    getRegister: getRegister,
    postRegister: postRegister
};

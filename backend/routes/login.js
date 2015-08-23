var passport = require('passport');

var Login = require('../users/login.js');

function renderLogin (err, res) {
    return res.render('login', {
        title: 'Log In',
        errorMessage: err
    });
}

function getLogin (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        renderLogin(null, res);
    }
}

function postLogin (req, res, next) {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/',
        failureFlash: true
    }, function (err, user, info) {
        if (err) {
            renderLogin(err.message, res);
        }
        if (user) {
            Login(req, user).then(function () {
                res.redirect('/');
            }, function (error) {
                renderLogin(error.message, res);
            });
        } else {
            renderLogin(info.message, res);
        }
    })(req, res, next);
}

module.exports = {
    getLogin: getLogin,
    postLogin: postLogin
};

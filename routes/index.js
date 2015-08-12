var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');

var DB = require('../db.js');

function renderLogin (err, res) {
    return res.render('login', {
        title: 'Log In',
        errorMessage: err
    });
}


router.get('/', function (req, res) {
    if (!req.isAuthenticated()) {
        res.redirect('/login');
    } else {
        var user = req.user;

        if (user) {
            user = user.toJSON();
        }
        res.render('index', {
            title: 'Tassel',
            user: user
        });
    }
});

router.get('/login', function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('login', {
            title: 'Log In'
        });
    }
});


router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/',
        failureFlash: true
    }, function (err, user, info) {
        if (err) {
            renderLogin(err.message, res);
        }
        if (user) {
            req.logIn(user, function (err) {
                if (err) {
                    renderLogin(err.message, res);
                } else {
                    res.redirect('/');
                }
            });
        } else {
            renderLogin(info.message, res);
        }
    })(req, res, next);
});

router.get('/register', function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('register', {
            title: 'Register'
        });
    }
});

router.post('/register', function (req, res, next) {
    var user = req.body;
    return new DB.User({
        username: user.username
    })
        .fetch()
        .then(function (model) {
            if (model) {
                res.render('register', {
                    title: 'Register',
                    errorMessage: 'username already exists'
                });
            } else {
                var password = user.password;
                var hash = bcrypt.hashSync(password);

                return new DB.User({
                    username: user.username,
                    password: hash
                });
            }
        })
        .then(function (signUpUser) {
            signUpUser.save();
            res.redirect('/login');
        });
});

module.exports = router;

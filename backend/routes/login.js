var passport = require('passport');

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
        res.render('login', {
            title: 'Log In'
        });
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
            req.logIn(user, function (error) {
                if (error) {
                    renderLogin(error.message, res);
                } else {
                    res.redirect('/');
                }
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

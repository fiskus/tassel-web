var Register = require('../users/register.js');

function renderRegister (err, res) {
    res.render('register', {
        title: 'Register',
        errorMessage: err
    });
}

function getRegister (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        renderRegister(null, res);
    }
}

function postRegister (req, res) {
    var user = req.body;
    return Register(user.username, user.password)
        .then(function () {
            res.redirect('/login');
        }, function (err) {
            renderRegister(err, res);
        });
}

module.exports = {
    getRegister: getRegister,
    postRegister: postRegister
};

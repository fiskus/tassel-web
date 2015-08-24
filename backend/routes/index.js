var express = require('express');
var router = express.Router();

var login = require('../routes/login.js');
var register = require('../routes/register.js');
var query = require('../routes/query.js');

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

router.get('/query', query);

router.get('/login', login.getLogin);
router.post('/login', login.postLogin);

router.get('/register', register.getRegister);
router.post('/register', register.postRegister);

module.exports = router;

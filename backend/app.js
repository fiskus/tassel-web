var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var passport = require('passport');
var LocalStrategy = require('passport-local');

var routes = require('./routes/index');
var DBUser = require('./db/users.js');

var app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, '../assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    store: new RedisStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../assets')));

passport.use(new LocalStrategy(
    function (username, password, done) {
        DBUser.where({
            username: username
        }).fetch().then(function (user) {
            if (user) {
                done(null, user.attributes);
            } else {
                done(null, false, {
                    message: 'No such user :('
                });
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.userId);
});

passport.deserializeUser(function (id, done) {
    DBUser.where({
        userId: id
    }).fetch().then(function (user) {
        done(null, user);
    });
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

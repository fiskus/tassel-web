var Promise = require('bluebird');

function LogIn (req, user) {
    return new Promise(function (resolve, reject) {
        req.logIn(user, function (error) {
            if (error) {
                reject(error);
            } else {
                req.session.save(function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

module.exports = LogIn;

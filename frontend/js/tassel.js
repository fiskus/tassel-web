import React from 'react';
import InputUI from './ui/input.jsx';
// import superagent from 'superagent-bluebird-promise';

var wrapper = document.querySelector('.tassel-main');
if (wrapper) {
    var props = {
        ON_KEY: event => {
            console.log('KEY', event.which, event.currentTarget.value);
        },
        ON_PASTE: event => {
            var input = event.currentTarget;
            setTimeout(() => {
                console.log('PASTE', input.value);
            }, 1);
        }
    };
    React.render(React.createElement(InputUI, props), wrapper);

    // superagent.post('/login').then((res) => {
    //     console.log(res.body);
    // });
}

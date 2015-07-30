import React from 'react';
import InputUI from './ui/input.jsx';

var wrapper = document.querySelector('.tassel-main');
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

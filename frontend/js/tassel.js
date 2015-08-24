import React from 'react';
import MainUI from './ui/main.jsx';
// import FormUI from './ui/form.jsx';
// import superagent from 'superagent-bluebird-promise';

// var wrapper = document.querySelector('.tassel-main');
// if (wrapper) {
//     var props = {
//         ON_KEY: event => {
//             console.log('KEY', event.which, event.currentTarget.value);
//         },
//         ON_PASTE: event => {
//             var input = event.currentTarget;
//             setTimeout(() => {
//                 console.log('PASTE', input.value);
//             }, 1);
//         },
//         ON_SUBMIT: event => {
//             console.log('SUBMIT', event, event.value);
//         }
//     };
//     React.render(React.createElement(FormUI, props), wrapper);

//     // superagent.post('/login').then((res) => {
//     //     console.log(res.body);
//     // });
// }

React.render(React.createElement(MainUI, {}), document.body);

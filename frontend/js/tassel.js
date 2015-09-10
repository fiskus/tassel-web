import React from 'react';

import MainUI from './ui/main.jsx';

import BookmarksStore from './stores/bookmarksstore.js';
import QueryXHR from './xhr/queryxhr.js';
import StateStore from './stores/statestore.js';
import BookmarksModel from './models/bookmarksmodel.js';

let mainDOMElement = document.querySelector('.tassel');

function Tassel () {
    StateStore.on('change', state => {
        let bookmarks = BookmarksModel(BookmarksStore(), state.get('input'));
        let props = {
            loading: state.loading,
            bookmarks
        };
        React.render(React.createElement(MainUI, props), mainDOMElement);
    });

    StateStore.emit('update', {
        loading: true
    });

    QueryXHR()
        .then(BookmarksStore)
        .then(bookmarks => {
            StateStore.emit('update', {
                bookmarks,
                loading: false
            });
        });
}

Tassel();

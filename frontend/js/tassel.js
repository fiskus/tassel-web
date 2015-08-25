import React from 'react';
import superagent from 'superagent-bluebird-promise';

import MainUI from './ui/main.jsx';

import Actions from './actions.js';
import BookmarksStore from './bookmarksstore.js';

BookmarksStore.onChange(() => {
    console.log('!!!!!!!!', BookmarksStore.bookmarks);
});

superagent.get('/query').then(res => {
    Actions.setBookmarks(res.body);
});

React.render(React.createElement(MainUI, {}), document.body);

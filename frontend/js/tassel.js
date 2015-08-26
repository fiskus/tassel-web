import React from 'react';
import superagent from 'superagent-bluebird-promise';

import MainUI from './ui/main.jsx';

import Actions from './actions.js';
import BookmarksStore from './bookmarksstore.js';

BookmarksStore.onChange(() => {
    mainUI.refs.list.setState({
        bookmarks: BookmarksStore.getFiltered()
    });
});

superagent.get('/query').then(res => {
    Actions.setBookmarks(res.body);
});

var mainUI = React.render(React.createElement(MainUI, {}), document.body);

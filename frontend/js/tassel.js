import React from 'react';

import MainUI from './ui/main.jsx';

import Actions from './actions.js';
import QueryXHR from './xhr/queryxhr.js';

QueryXHR().then(bookmarks => Actions.setBookmarks(bookmarks));

React.render(React.createElement(MainUI, {}), document.body);

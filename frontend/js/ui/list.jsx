import React from 'react';
import superagent from 'superagent-bluebird-promise';

import BookmarksStore from '../bookmarksstore.js';

var ListUI = React.createClass({
    displayName: 'ListUI',
    getInitialState () {
        return {
            bookmarks: []
        };
    },
    componentDidMount () {
        BookmarksStore.onChange(() => {
            this.setState({
                bookmarks: BookmarksStore.getFiltered()
            });
        });
    },
    _createBookmark (bookmark, index) {
        var title = bookmark.title || bookmark.url;
        return (
            <div className="bookmark" key={index}>
                <a href={bookmark.url}>{title}</a>
            </div>
        );
    },
    render () {
        return (
            <div className="tassel-list">
                {this.state.bookmarks.map(this._createBookmark)}
            </div>
        );
    }
});

export default ListUI;

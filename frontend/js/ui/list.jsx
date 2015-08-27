import React from 'react';

import BookmarksStore from '../stores/bookmarksstore.js';

var ListUI = React.createClass({
    displayName: 'ListUI',
    getInitialState () {
        return {
            bookmarks: []
        };
    },
    componentDidMount () {
        BookmarksStore.onChange(bookmarks => {
            this.setState({
                bookmarks
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

import React from 'react';
import superagent from 'superagent-bluebird-promise';

var ListUI = React.createClass({
    displayName: 'ListUI',
    getInitialState () {
        return {
            bookmarks: []
        };
    },
    componentDidMount () {
        superagent.get('/query').then((res) => {
            this.setState({
                bookmarks: res.body
            });
        });
    },
    _createBookmark (bookmark, index) {
        return (
            <div className="bookmark" key={index}>
                <a href={bookmark.url}>{bookmark.title}</a>
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

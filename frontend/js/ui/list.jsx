import React from 'react';

class List extends React.Component {
    constructor (props) {
        super(props);
    }

    _createBookmark (bookmark, index) {
        var title = bookmark.title || bookmark.url;
        return (
            <div className="bookmark" key={index}>
                <a href={bookmark.url}>{title}</a>
            </div>
        );
    }

    render () {
        return (
            <div className="tassel-list">
                {this.props.bookmarks.map(this._createBookmark)}
            </div>
        );
    }
}

List.displayName = 'List';

export default List;

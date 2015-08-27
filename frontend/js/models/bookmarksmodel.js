function isBookmarkTitleHas (bookmark, query) {
    if (bookmark.title) {
        return bookmark.title.indexOf(query) > -1;
    } else {
        return false;
    }
}

function isBookmarkURLHas (bookmark, query) {
    return bookmark.url.indexOf(query) > -1;
}

function isBookmarkHas (bookmark, query) {
    if (isBookmarkTitleHas(bookmark, query)) {
        return true;
    }
    if (isBookmarkURLHas(bookmark, query)) {
        return true;
    }
    return false;
}

function BookmarksModel (bookmarks, query) {
    if (query) {
        return bookmarks.filter(bookmark => isBookmarkHas(bookmark, query));
    } else {
        return bookmarks;
    }
}

export default BookmarksModel;

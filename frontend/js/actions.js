import Dispatcher from './dispatcher.js';

var Actions = {
    setBookmarks (bookmarks) {
        Dispatcher.setBookmarks(bookmarks);
    },
    onKeyPress (event) {
        Dispatcher.onKeyPress(event);
    }
};

export default Actions;

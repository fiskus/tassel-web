import Dispatcher from './dispatcher.js';

var Actions = {
    setBookmarks (bookmarks) {
        Dispatcher.setBookmarks(bookmarks);
    },
    onKeyPress (event) {
        Dispatcher.onKeyPress(event);
    },
    onSubmit (event) {
        Dispatcher.onSubmit(event);
    }
};

export default Actions;

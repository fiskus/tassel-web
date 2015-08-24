import Delorean from 'delorean';
import BookmarksStore from './bookmarksstore.js';

var Dispatcher = Delorean.Flux.createDispatcher({
    setBookmarks (bookmarks) {
        this.dispatch('bookmarks', bookmarks);
    },
    onKeyPress (event) {
        this.dispatch('onkeypress', event);
    },
    getStores () {
        return {
            bookmarks: BookmarksStore
        };
    }
});

export default Dispatcher;

import Delorean from 'delorean';
import BookmarksStore from './stores/bookmarksstore.js';

var Dispatcher = Delorean.Flux.createDispatcher({
    setBookmarks (bookmarks) {
        this.dispatch('bookmarks', bookmarks);
    },
    onKeyPress (event) {
        this.dispatch('onkeypress', event);
    },
    onSubmit (event) {
        this.dispatch('onsubmit', event);
    },
    getStores () {
        return {
            bookmarks: BookmarksStore
        };
    }
});

export default Dispatcher;

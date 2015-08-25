import Delorean from 'delorean';

var Store = Delorean.Flux.createStore({
    bookmarks: [],
    setBookmarks (bookmarks) {
        this.bookmarks = bookmarks;
        this.emit('change');
    },
    onKeyPress () {
        this.bookmarks = this.bookmarks.filter((bookmark, i) => {
            return i > 1;
        });
        this.emit('change');
    },
    onSubmit ({value}) {
        console.log('SUBMIT', value);
    },
    actions: {
        'bookmarks': 'setBookmarks',
        'onkeypress': 'onKeyPress',
        'onsubmit': 'onSubmit'
    }
});

export default Store;

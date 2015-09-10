import Immutable from 'immutable';

// import BookmarksModel from '../models/bookmarksmodel.js';
// import UpdateXHR from '../xhr/updatexhr.js';
// import Message from '../message.js';

// var Store = Delorean.Flux.createStore({
//     bookmarks: Immutable.List(),
//     setBookmarks (bookmarks) {
//         this.bookmarks = Immutable.List(bookmarks);
//         this.emit('change', this.bookmarks);
//     },
//     onKeyPress (event) {
//         var filteredBookmarks = BookmarksModel(this.bookmarks, event.value);
//         this.emit('change', filteredBookmarks);
//     },
//     onSubmit ({value}) {
//         submitUrl(value);
//     },
//     actions: {
//         'bookmarks': 'setBookmarks',
//         'onkeypress': 'onKeyPress',
//         'onsubmit': 'onSubmit'
//     }
// });

// function submitUrl (url) {
//     url = url.trim();
//     UpdateXHR(url)
//         .then(text => Message(text, 'success'),
//               error => Message(error, 'error'));
// }

let bookmarks = Immutable.List();

function BookmarksStore (input) {
    if (input) {
        bookmarks = Immutable.List(input);
    }

    return bookmarks;
}

export default BookmarksStore;

import {EventEmitter} from 'events';

// import BookmarksStore from './stores/bookmarksstore.js';
// import StateStore from './stores/statestore.js';

let that;

// class Dispatcher {
//     constructor () {
//         if (that) {
//             return that;
//         }

//         that = this;

//         this.dispatcher = new EventEmitter();

//         return this;
//     }

//     setBookmarks (bookmarks) {
//         this.dispatcher.emit('bookmarks', bookmarks);
//     }

//     onKeyPress (event) {
//         this.dispatcher.emit('onkeypress', event);
//     }

//     onSubmit (event) {
//         this.dispatcher.emit('onsubmit', event);
//     }

//     // getStores () {
//     //     return {
//     //         bookmarks: BookmarksStore,
//     //         state: StateStore
//     //     };
//     // }
// }
var Dispatcher = {
};

export default Dispatcher;

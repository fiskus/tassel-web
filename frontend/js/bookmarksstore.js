import Delorean from 'delorean';
import superagent from 'superagent-bluebird-promise';

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
        if (value.indexOf('http') === 0) {
            var data = {
                url: value
            };
            superagent.post('/update').send(data).then(res => {
                console.log(res);
            });
        }
    },
    actions: {
        'bookmarks': 'setBookmarks',
        'onkeypress': 'onKeyPress',
        'onsubmit': 'onSubmit'
    }
});

export default Store;

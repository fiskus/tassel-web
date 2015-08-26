import Delorean from 'delorean';
import superagent from 'superagent-bluebird-promise';

var Store = Delorean.Flux.createStore({
    bookmarks: [],
    filtered: [],
    setBookmarks (bookmarks) {
        this.bookmarks = bookmarks;
        this.filtered = bookmarks;
        this.emit('change');
    },
    getFiltered () {
        return this.filtered;
    },
    onKeyPress (event) {
        console.log('onKeyPress', event.value);
        this.filtered = this.bookmarks.filter(bookmark => {
            if (!event.value) {
                return true;
            }
            var title = bookmark.title;
            var url = bookmark.url;
            if (title && title.indexOf(event.value) > -1) {
                return true;
            }
            if (url && url.indexOf(event.value) > -1) {
                return true;
            }
            return false;
        });
        console.log(this.filtered.map(mark => mark.url));
        this.emit('change');
    },
    onSubmit ({value}) {
        submitUrl(value);
    },
    actions: {
        'bookmarks': 'setBookmarks',
        'onkeypress': 'onKeyPress',
        'onsubmit': 'onSubmit'
    }
});

function submitUrl (url) {
    url = url.trim();
    if (url.indexOf('http') < 0) {
        return;
    }
    superagent.post('/update').send({url}).then(res => {
        var response = res.body;
        if (response.success) {
            var text = `Sent ${response.url} "${response.title}" successfully`;
            console.log(text);
        }
    });
}

export default Store;

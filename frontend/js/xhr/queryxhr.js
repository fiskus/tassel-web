import Superagent from 'superagent-bluebird-promise';

function createUrl (query) {
    if (query) {
        return `/query?query=${query}`; // LOL
    } else {
        return '/query';
    }
}

function QueryXHR (query) {
    var url = createUrl(query);
    return Superagent
        .get(url)
        .then(res => {
            return res.body;
        });
}

export default QueryXHR;

import Promise from 'bluebird';
import Superagent from 'superagent-bluebird-promise';

function validateURL (url) {
    return url.indexOf('http') === 0;
}

function createSuccessMessage (response) {
    return `Sent ${response.url} "${response.title}" successfully`;
}

function createErrorMessage (response) {
    return `Error for ${response.url} "${response.title}"`;
}

function UpdateXHR (url) {
    if (validateURL(url)) {
        return Superagent
            .post('/update')
            .send({url})
            .then(res => {
                var response = res.body;
                if (response.success) {
                    return createSuccessMessage(response);
                } else if (response.error) {
                    throw new Error(createErrorMessage(response));
                } else {
                    throw new Error('Unexpected error');
                }
            });
    } else {
        return Promise.reject(`This is not URL: ${url}`);
    }
}


export default UpdateXHR;

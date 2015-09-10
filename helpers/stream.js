var Promise = require('bluebird');

function Stream (dispatcher, options) {
    options = options || {};
    var eventTypes = {
        callback: options.eventTypeCallback || 'data',
        end: options.eventTypeEnd || 'end',
        error: options.eventTypeError || 'error'
    };

    return new Promise((resolve, reject) => {
        var content;
        dispatcher.on(eventTypes.error, err => reject(err));
        dispatcher.on(eventTypes.callback, data => {
            content += data;
        });
        dispatcher.on(eventTypes.end, () => resolve(content));
    });
}

module.exports = Stream;

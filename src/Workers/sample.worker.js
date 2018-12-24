/* eslint-disable */

self.onmessage = function (event) {

    let messageHandler;

    switch (event.data.type) {
        case 'getval':
            return self.postMessage({eventdata: Math.random()})
            break;

        default:
            break;
    }
};
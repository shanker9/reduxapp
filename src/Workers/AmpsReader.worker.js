/* eslint-disable */
import AmpsControllerSingleton from '../Network/AmpsController.js';

let controller;
(function () {
    controller = AmpsControllerSingleton.getInstance();
})();

self.onmessage = function (event) {

    let updateQueue = new Map();
    const ampsMessageHandler = function (message) {

        switch (message.c) {
            case 'group_begin':
                self.postMessage({type : 'i', message: message })
                break;

            case 'sow':
                self.postMessage({type : 'i', message: message })
                break;

            case 'group_end':
                self.postMessage({type : 'i', message: message })
                setInterval(updateTimer, 300);
                break;

            case 'p':
                updateQueue.set(message.k, message);
                break;
            default:
                break;
        }

    };

    switch (event.data.type) {
        case 'subscribe':
            controller.connectAndSubscribe(ampsMessageHandler, subscriptionsDetailsMessageHandler, event.data.command);
            break;

        default:
            break;
    }

    const updateTimer = function () {
        if (updateQueue.size > 0) {
            // console.log('qs',updateQueue.size);
            self.postMessage({type : 'u', updates: updateQueue });
            updateQueue.clear();
        }
    }
};

const subscriptionsDetailsMessageHandler = function(subId){
    console.log('Subscription Id',subId);
}
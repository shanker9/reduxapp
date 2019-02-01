/* eslint-disable */
import AmpsControllerSingleton from '../Network/AmpsController.js';

let controller, currentSubscriptionId, shouldSendUpdates=true;
(function () {
    controller = AmpsControllerSingleton.getInstance();
})();

self.onmessage = function (event) {
    if(event.data.type === 'unsubscribe'){
        shouldSendUpdates = false;
    }
    if (currentSubscriptionId) {
        console.log('Unsubscribing to current subscription');
        controller.unsubscribe(currentSubscriptionId, () => {
            console.log('unsubscribed successfully')
            console.log('disconnecting from amps');
            controller.disconnectFromAmps();
            console.log('terminating worker thread');
            self.close();
        });
    }

    let updateQueue = new Map();
    const ampsMessageHandler = function (message) {
        if(!shouldSendUpdates) {return}

        switch (message.c) {
            case 'group_begin':
                self.postMessage({ type: 'i', message: message })
                break;

            case 'sow':
                self.postMessage({ type: 'i', message: message })
                break;

            case 'group_end':
                self.postMessage({ type: 'i', message: message })
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
        if(!shouldSendUpdates) {return}
        if (updateQueue.size > 0) {
            // console.log('qs',updateQueue.size);
            self.postMessage({ type: 'u', updates: updateQueue });
            updateQueue.clear();
        }
    }
};

const subscriptionsDetailsMessageHandler = function (subId) {
    console.log('Subscription Id', subId);
    currentSubscriptionId = subId;
    self.postMessage({ type: 'subId', subId: subId })
}
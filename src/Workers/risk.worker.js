/* eslint-disable */
import AmpsControllerSingleton from '../Network/AmpsController.js';
const WorkerThread = require('worker-loader!../Workers/AmpsReader.worker.js');
// import Wrapper_pb from '../proto_js/Wrapper_pb';

let currentSubscriptionId, controller, fullDataMap, tempDataMap, updateSet, visibleRange, bookmark;

(function () {
    fullDataMap = new Map();
    tempDataMap = new Map();
    updateSet = new Set();
    bookmark = null;
    visibleRange = [];
    controller = AmpsControllerSingleton.getInstance();
})();

const sampleWorker = new WorkerThread();

self.onmessage = function (event) {

    let messageHandler;

    switch (event.data.type) {
        case 'newSubscription':
            if (currentSubscriptionId) controller.unsubscribe(currentSubscriptionId);
            messageHandler = event.data.isGroupedView ? ampsAggregateMessageHandler : ampsMessageHandler;
            bookmark = event.data.command.bookmark;
            sampleWorker.onmessage = messageHandler;
            sampleWorker.postMessage({ type: 'subscribe', command: event.data.command });
            // controller.connectAndSubscribe(messageHandler, subscriptionsDetailsMessageHandler, event.data.command);
            break;

        case 'newQuery':
            event.data.messageType === 'protobuf' ?
                controller.connectAndSubscribeForProtobuf(queryMessageHandlerProtobuf, subId => console.log(subId), event.data.command) :
                controller.connectAndSubscribe(queryMessageHandlerJson, subId => console.log(subId), event.data.command);
            break;

        case 'updateVisibleRange':
            visibleRange = event.data.visibleRange;
            break;

        default:
            break;
    }
};

let timer, updateTimer;
let msgPerSec, val, newVal, lastMessage, counter = 0, counterPerSec = 0;
let ampsAggregateMessageHandler = function (message) {

    switch (message.c) {
        case 'group_begin':
            fullDataMap.clear();
            tempDataMap.clear();
            updateSet.clear();
            clearArray(visibleRange);
            clearInterval(updateTimer);
            console.time('sow');
            msgPerSec = 0;
            break;

        case 'sow':
            fullDataMap.set(message.k, {
                rowKey: message.k,
                isAggregatedRow: true,
                data: message.data,
                childData: new Map(),
                showChildData: false,
                isSelected: false,
                groupKey: null,
                grouplevel: 0
            });
            if (fullDataMap.size === 100) {
                self.postMessage({ datatype: 'agg_sow_end', eventData: fullDataMap, bookmark: bookmark, messagetype: 'group_end', blockScreen: true });
            }
            if (fullDataMap.size % 5000 === 0) {
                self.postMessage({ datatype: 'agg_sow_end', eventData: fullDataMap, bookmark: bookmark, messagetype: 'group_end', blockScreen: true });
            }
            break;

        case 'group_end':
            console.timeEnd('sow');
            self.postMessage({ datatype: 'agg_sow_end', eventData: fullDataMap, bookmark: bookmark, messagetype: 'group_end', blockScreen: false });
            updateTimer = setInterval(processUpdatesAndNewRows, 200);
            // setInterval(printMsgPerSec, 1000);
            break;

        case 'p':
            val = fullDataMap.get(message.k);
            if (val) {
                mergeJsonObjects(val.data, message.data);
                updateSet.add(message.k);
            } else {
                newVal = tempDataMap.get(message.k);
                if (newVal) {
                    mergeJsonObjects(newVal.data, message.data);
                } else {
                    let newItem = {
                        rowKey: message.k,
                        isAggregatedRow: true,
                        data: message.data,
                        childData: new Map(),
                        showChildData: false,
                        isSelected: null,
                        groupKey: null,
                        grouplevel: 0
                    }
                    tempDataMap.set(message.k, newItem);
                }
            }
            // msgPerSec++;
            break;
        default:
            break;
    }

};

let updateQueue = new Map();
let message;
let ampsMessageHandler = function (event) {

    if (event.data.type === 'u') {
        processUpdates(event.data.updates);
    } else {
        message = event.data.message;
        switch (message.c) {
            case 'group_begin':
                // fullDataMap.clear();

                fullDataMap.clear();
                tempDataMap.clear();
                updateSet.clear();
                clearArray(visibleRange);
                clearInterval(updateTimer);
                console.time('sow');

                updateQueue.clear();
                // clearInterval(msgPerSecTimer);
                break;

            case 'sow':
                fullDataMap.set(message.k, {
                    rowKey: message.k,
                    isAggregatedRow: false,
                    data: message.data,
                    childData: null,
                    showChildData: false,
                    isSelected: false,
                    groupKey: null,
                    grouplevel: 0
                });
                break;

            case 'group_end':
                console.timeEnd('sow');
                self.postMessage({ datatype: 'sow_end', eventData: fullDataMap });
                visibleRange = Array.from(fullDataMap.keys()).slice(0, 30);
                // updateTimer = setInterval(processUpdatesAndNewRows, 1000);
                // msgPerSecTimer = setInterval(printMsgPerSec,1000);
                break;

            case 'p':
                // let val = fullDataMap.get(messageKey);
                // if (val) {
                //     mergeJsonObjects(val.data, messageData);
                //     if (visibleRange.find(visreckey => visreckey === val.rowKey)) {
                //         self.postMessage({ datatype: 'update', eventData: val });
                //     }
                // }

                updateQueue.set(message.k, message);
                // msgPerSec++;
                // val = fullDataMap.get(message.k);
                // if (val) {
                //     mergeJsonObjects(val.data, message.data);
                //     updateSet.add(message.k);
                // } else {
                //     newVal = tempDataMap.get(message.k);
                //     if (newVal) {
                //         mergeJsonObjects(newVal.data, message.data);
                //     } else {
                //         let newItem = {
                //             rowKey: message.k,
                //             isAggregatedRow: false,
                //             data: message.data,
                //             childData: null,
                //             showChildData: false,
                //             isSelected: false,
                //             groupKey: null,
                //             grouplevel: 0
                //         }
                //         tempDataMap.set(message.k, newItem);
                //     }
                // }
                break;
            default:
                break;
        }
    }
};

let printMsgPerSec = function () {
    msgPerSec = 0;
}

let processUpdatesAndNewRows = function () {
    processUpdates();
    // postNewRowsData();
}

let processUpdates = function (updateQueue) {
    // visibleRange.forEach(item => {
    //     if (updateSet.has(item)) {
    //         self.postMessage({ datatype: 'update', eventData: fullDataMap.get(item) });
    //     }
    // })
    // updateSet.clear();
    // console.time('up');
    // console.log('qSize',updateQueue.size);
    // console.time('rd');
    updateQueue.forEach((message, messageKey) => {
        if (fullDataMap.has(messageKey)) {
            mergeJsonObjects(fullDataMap.get(messageKey).data, message.data);
        } else {
            tempDataMap.set(messageKey, {
                rowKey: messageKey,
                isAggregatedRow: false,
                data: message.data,
                childData: null,
                showChildData: false,
                isSelected: false,
                groupKey: null,
                grouplevel: 0
            })
        }
    })

    if (tempDataMap.size > 0) {
        self.postMessage({ datatype: 'newaggrows_update', eventData: tempDataMap, bookmark: bookmark });
        tempDataMap.forEach((data, key) => fullDataMap.set(key, data));
        tempDataMap.clear();
    }

    visibleRange.forEach(ri => {
        if (updateQueue.has(ri)) {
            self.postMessage({ datatype: 'update', eventData: fullDataMap.get(ri) });
        }
    })
    updateQueue.clear();
    // console.timeEnd('rd');
}

let postNewRowsData = function () {
    if (tempDataMap.size > 0) {
        self.postMessage({ datatype: 'newaggrows_update', eventData: tempDataMap, bookmark: bookmark });
        tempDataMap.forEach((data, key) => fullDataMap.set(key, data));
        tempDataMap.clear();
    }
}

let protoBufQueryResults = new Map();
let queryMessageHandlerProtobuf = function (message) {
    switch (message.c) {
        case 'group_begin':
            protoBufQueryResults.clear();
            break;
        case 'sow':
            const deserializedData = convertBinaryToProtobuf(message.data);
            protoBufQueryResults.set(message.k, { key: message.k, data: deserializedData.toObject() });
            break;
        case 'group_end':
            console.timeEnd('query');
            self.postMessage({ datatype: 'query_data', eventData: protoBufQueryResults });
            break;
        default:
            break;
    }
};

let jsonQueryResults = new Map();
let queryMessageHandlerJson = function (message) {
    switch (message.c) {
        case 'group_begin':
            jsonQueryResults.clear();
            break;
        case 'sow':
            jsonQueryResults.set(message.k, { key: message.k, data: message.data });
            break;
        case 'group_end':
            self.postMessage({ datatype: 'query_data', eventData: jsonQueryResults });
            break;
        default:
            break;
    }
};

let subscriptionsDetailsMessageHandler = function (subId) {
    currentSubscriptionId = subId;
};

let convertBinaryToProtobuf = function (binaryData) {
    // return Wrapper_pb.Wrapper.deserializeBinary(binaryData);
};

let mergeJsonObjects = function (json1, json2) {
    for (let key in json2) { json1[key] = json2[key] }
    return json1;
};

let clearArray = arr => {
    while (arr.length > 0) { arr.pop() }
}
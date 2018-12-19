import * as Amps from 'amps';
import serverconfig from '../serverconfig.json';

const isDebug = true;
if (!isDebug) {
    console.log = function () {
    }
}

var targetConfig, targetConfigName;
for (var item in serverconfig) {
    if (serverconfig[item].active) {
        targetConfig = serverconfig[item];
        targetConfigName = item;
        break;
    }
}

console.log('AMPS CONTROLLER');

var ip = targetConfig.serverIP;
var port = targetConfig.serverPort;

var ampsServerUriForJson = `ws://${ip}:${port}/amps/json`;
var ampsServerUriForProtobuf = `ws://${ip}:${port}/amps/sow-protobuf`;
var ampsClient = new Amps.Client(`AmpsWebClient-${Date.now()}`);
var ampsProtobufClient = new Amps.Client(`AmpsWebClientProtobuf-${Date.now()}`);

var AmpsControllerSingleton = (function () {
    var instance;
    return {
        getInstance: function () {
            if (instance !== undefined) {
                return instance;
            } else {
                instance = new AmpsController();
                return instance;
            }
        }
    }
})();

// function printingFilter(data, outgoing) {
//     if (outgoing) {
//         console.log('OUTGOING ---> ', data);
//     }
//     else {
//         console.log('INCOMING ---> ', data);
//     }
// }

// ampsProtobufClient.transportFilter(printingFilter);
var reconnectionCount = 1;
class AmpsController {

    constructor() {
        this.ampsconnectionObjectForJson = undefined;
        this.ampsconnectionObjectForProtobuf = undefined;
    }

    connectAndSubscribe(dataUpdateCallback, subscriberInfoCallback, commandObject, successCallback, errorCallback) {
        let ampsCommandObject;

        ampsClient.disconnectHandler(
            (client, error) => {
                // errorCallback(error);
                if (reconnectionCount < 6) {
                    console.log('Amps disconnected, Retrying to connect...', `Attempt ${reconnectionCount++}`);
                    this.ampsconnectionObjectForJson = setTimeout(this.connectToAmps, 3000);
                }
            }
        )

        if (!this.ampsconnectionObjectForJson) {
            this.ampsconnectionObjectForJson = ampsClient.connect(ampsServerUriForJson)
                .then((connectionObject) => {
                    // successCallback(connectionObject);
                    return connectionObject;
                })
        }

        this.ampsconnectionObjectForJson
            .then(() => {
                ampsCommandObject = this.createAmpsCommand(commandObject);
                console.log('sending subscription command');
                return ampsClient.execute(ampsCommandObject, dataUpdateCallback);

            }).then((subId) => {
                console.log("Subscription ID: " + subId);
                subscriberInfoCallback(subId);
            })
    }

    publishJson(topic, message) {

        if (!this.ampsconnectionObjectForJson) {
            this.ampsconnectionObjectForJson = ampsClient.connect(ampsServerUriForJson);
        }

        this.ampsconnectionObjectForJson
            .then(() => {
                ampsClient.publish(topic, message);
            })
    }

    connectToAmps() {
        ampsClient.connect(ampsServerUriForJson)
            .then((connectionObject) => {
                return connectionObject;
            });
    }

    unsubscribe(subId, successCallback, subscriptionColumnReference) {
        ampsClient.unsubscribe(subId)
            .then(() => {
                console.log('Unsubscribed the subscription with ID : ' + subId);
                if (successCallback) {
                    successCallback(subId, subscriptionColumnReference);
                }
            });
    }

    connectAndSubscribeForProtobuf(dataUpdateCallback, subscriberInfoCallback, commandObject) {
        let ampsCommandObject;
        if (!this.ampsconnectionObjectForProtobuf) {
            this.ampsconnectionObjectForProtobuf = ampsProtobufClient.connect(ampsServerUriForProtobuf);
        }

        this.ampsconnectionObjectForProtobuf
            .then(() => {
                ampsCommandObject = this.createAmpsCommand(commandObject);
                return ampsProtobufClient.execute(ampsCommandObject, dataUpdateCallback);
            }).then((subId) => {
                console.log("Subscription ID: " + subId);
                subscriberInfoCallback(subId);
            })
    }

    unsubscribeProtobuf(subId, successCallback) {
        ampsProtobufClient.unsubscribe(subId)
            .then(() => {
                successCallback(subId);
            });
    }

    publishProtobuf(topic, message) {

        if (!this.ampsconnectionObjectForProtobuf) {
            this.ampsconnectionObjectForProtobuf = ampsProtobufClient.connect(ampsServerUriForProtobuf);
        }

        this.ampsconnectionObjectForProtobuf
            .then(() => {
                ampsProtobufClient.publish(topic, message);
            })
    }

    createAmpsCommand(commandObject) {
        let ampsCommand;
        if (commandObject.command !== undefined) {
            ampsCommand = new Amps.Command(commandObject.command);
        }

        if (commandObject.topic !== undefined) {
            ampsCommand = ampsCommand.topic(commandObject.topic);
        }

        if (commandObject.filter !== undefined) {
            ampsCommand = ampsCommand.filter(commandObject.filter);
        }

        if (commandObject.bookmark !== undefined) {
            ampsCommand = ampsCommand.bookmark(commandObject.bookmark);
        }

        if (commandObject.orderBy !== undefined) {
            ampsCommand = ampsCommand.orderBy(commandObject.orderBy);
        }

        if (commandObject.batchSize !== undefined) {
            ampsCommand = ampsCommand.batchSize(commandObject.batchSize);
        }

        if (commandObject.options !== undefined) {
            ampsCommand = ampsCommand.options(commandObject.options);
        }

        return ampsCommand;
    }

}

export default AmpsControllerSingleton;
export { targetConfigName as ServerName };
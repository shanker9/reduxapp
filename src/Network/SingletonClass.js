const WorkerThread = require(`worker-loader!../Workers/risk.worker`);

export const AmpsConnector = (function () {
    var instance;
    return {
        getInstance: function (store) {
            if (instance !== undefined) {
                return instance;
            } else {
                instance = new SingletonClass(store);
                return instance;
            }
        }
    }
})();

class SingletonClass {
    constructor(store) {
        // this.blotter = blotter;
        // this.subscribeToAmps = this.subscribeToAmps.bind(this);
        // this.Actions = actions
        this._store = store
        this.workerThread = window.Worker ? new WorkerThread() : console.log('Web Workers not supported');
    }

    updateVisibleRange(workerReference, range) {
        this.workerThread.postMessage({ type: 'updateVisibleRange', visibleRange: range });
    }

    subscribeToAmps(blotter, Actions, query = {
        command: 'sow_and_delta_subscribe',
        topic: 'ProductUI',
        filter: "(/Account LIKE '.')",
        orderby: "/Division",
        options: "max_backlog=50,grouping=[/Product],projection=[COUNT_DISTINCT(/Product) AS /ProductCount,/WhatIf,/Product,/Account,/Desk,/Region,/Quantity,/Division,/Counterparty,/Vertex,/PayCurrency,/PayDiscountCurve,MAX(/LastUpdated) As /LastUpdated,/PayNotional,/ReceiveCurrency,/ReceiveDiscountCurve,/ReceiveIndex,/ReceiveNotional,SUM(/Price) As /Price,SUM(/PayLeg) As /PayLeg,SUM(/ReceiveLeg) As /ReceiveLeg,SUM(/Rho10bps) AS /Rho10bps,SUM(/Theta1d) AS /Theta1d,SUM(/Delta1pct) AS /Delta1pct,SUM(/Gamma1pct) AS /Gamma1pct,SUM(/Vega1pt) AS /Vega1pt,/PayFixedRate,/MaturityDate,/ContractSize],no_empties,conflation=300ms"
    }) {
        const that = this;
        this.workerThread.postMessage({
            type: 'newSubscription',
            command: query,
            isGroupedView: false
        });

        this.workerThread.onmessage = (event) => {
            switch (event.data.datatype) {
                case 'sow_end':
                    that._store.dispatch(Actions.INITIAL_SOW_DATA(blotter, event.data.eventData))
                    // dispatch({ type: 'INITIAL_SOW_DATA', name: blotter, payload: event.data.eventData });
                    break;
                case 'update':
                    that._store.dispatch(Actions.ROW_UPDATE(blotter, event.data.eventData));
                    // dispatch({ type: 'UPDATE', name: blotter, payload: event.data.eventData });
                    break;
                case 'newaggrows_update':
                    that._store.dispatch(Actions.NEW_ROWS_UPDATE(blotter, event.data.eventData));
                    // dispatch({ type: 'UPDATE', name: blotter, payload: event.data.eventData });
                    break;
                default:
                    break;
            }
        }
    }
}
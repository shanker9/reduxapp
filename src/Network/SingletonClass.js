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

    subscribeToAmps(blotter, Actions, query ) {
        const that = this;
        if(!query) return;
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
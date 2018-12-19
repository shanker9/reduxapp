/* eslint-disable */
import { connect } from 'react-redux';
import BlotterComponent from './BlotterComponent';
const WorkerThread = require('worker-loader!../Workers/blotterWorker');

const workerThread = window.Worker ? new WorkerThread() : console.log('Web Workers not supported');

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        gridData: state.gridData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        divClick: randData => {
            dispatch({ type: 'RND', payload: { randData: randData } });
        },
        updateRandPrice: timestamp => {
            dispatch({ type: 'RND_PRICE', payload: { price: `$${(Math.random() * 3000).toFixed(2)}`, timestamp: timestamp } })
        },
        subscribeToAmps : () => {
            workerThread.postMessage({
                type: 'newSubscription',
                command: {
                    command : 'sow_and_subscribe',
                    topic : 'ProductUI'
                },
                isGroupedView: false
            });
            workerThread.onmessage = (event) => {
                switch (event.data.datatype) {
                    case 'sow_end':
                        dispatch({type : 'INITIAL_SOW_DATA', payload : event.data.eventData});
                        break;
                
                    default:
                        break;
                }
            }
        }
    }
}

const BlotterContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterComponent);

export default BlotterContainer;
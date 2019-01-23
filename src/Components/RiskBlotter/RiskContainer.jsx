/* eslint-disable */
import {connect} from 'react-redux';
import Actions from './Actions';
const WorkerThread = require('worker-loader!../../Workers/risk.worker');

const workerThread = window.Worker ? new WorkerThread() : console.log('Web Workers not supported');


import RiskComponent from './RiskComponent'

const mapStateToProps = (state) => {
    return {
        gridData: state['risk'].gridData,
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        divClick: randData => {
            dispatch({type: 'RND', payload: {randData: randData}});
        },
        updateRandPrice: timestamp => {
            dispatch({
                type: 'RND_PRICE',
                payload: {price: `$${(Math.random() * 3000).toFixed(2)}`, timestamp: timestamp}
            })
        },
        updateVisibleRange: range => {
            workerThread.postMessage({type: 'updateVisibleRange', visibleRange: range});
        },
        subscribeToAmps: (blotter) => {
            workerThread.postMessage({
                type: 'newSubscription',
                command: {
                    command: 'sow_and_delta_subscribe',
                    topic: 'ProductUI',
                    filter: "(/Account LIKE '.')",
                    orderby: "/Division",
                    options: "max_backlog=50,grouping=[/Division],projection=[COUNT_DISTINCT(/Product) AS /ProductCount,/WhatIf,/Product,/Account,/Desk,/Region,/Quantity,/Division,/Counterparty,/Vertex,/PayCurrency,/PayDiscountCurve,MAX(/LastUpdated) As /LastUpdated,/PayNotional,/ReceiveCurrency,/ReceiveDiscountCurve,/ReceiveIndex,/ReceiveNotional,SUM(/Price) As /Price,SUM(/PayLeg) As /PayLeg,SUM(/ReceiveLeg) As /ReceiveLeg,SUM(/Rho10bps) AS /Rho10bps,SUM(/Theta1d) AS /Theta1d,SUM(/Delta1pct) AS /Delta1pct,SUM(/Gamma1pct) AS /Gamma1pct,SUM(/Vega1pt) AS /Vega1pt,/PayFixedRate,/MaturityDate,/ContractSize],no_empties,conflation=300ms"
                },
                isGroupedView: false
            });

            workerThread.onmessage = (event) => {
                switch (event.data.datatype) {
                    case 'sow_end':
                        dispatch(Actions.INITIAL_SOW_DATA(blotter, event.data.eventData))
                        // dispatch({ type: 'INITIAL_SOW_DATA', name: blotter, payload: event.data.eventData });
                        break;
                    case 'update':
                        dispatch(Actions.ROW_UPDATE(blotter, event.data.eventData));
                        // dispatch({ type: 'UPDATE', name: blotter, payload: event.data.eventData });
                        break;
                    default:
                        break;
                }
            }
        }
    }
};

const RiskContainer = connect(mapStateToProps, mapDispatchToProps)(RiskComponent);

export default RiskContainer;
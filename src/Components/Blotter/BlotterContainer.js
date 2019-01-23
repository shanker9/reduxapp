/* eslint-disable */
import { connect } from 'react-redux';
import BlotterComponent from './BlotterComponent';
import Actions from './Actions';

const mapStateToProps = (state, ownProps) => {
    const stateVar = ownProps.blotter;
    return {
        blotter: stateVar,
        gridData: state[stateVar].gridData,
        gridHeaderData: state[stateVar].headerData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateVisibleRange: range => {
            // workerThread.postMessage({ type: 'updateVisibleRange', visibleRange: range });
            // TODO
        },
        connectToServer : ownProps.connectToServer,
        expandGroupedRow: () => {

        },
        collapseGroupedRow: (rowKey) => {
        },
        sortGridByColumn: () => {

        },
        applyFilter: () => {

        },
        columnShuffled: () => {

        },
        columnResized: () => {

        }
    }
}

const BlotterContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterComponent);

export default BlotterContainer;
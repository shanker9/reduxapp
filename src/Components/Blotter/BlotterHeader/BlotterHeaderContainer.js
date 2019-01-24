import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';

const mapStateToProps = (state, ownProps) => {
    const stateVar = ownProps.blotter;
    return {
        blotter: stateVar,
        gridHeaderData: state[stateVar].headerData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        populateGridSettings : (headerDataSet) => (dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: headerDataSet } })),
        addColumnData: columnData => (dispatch({ type: 'ADD_COLUMN_DATA', payload: { headerData: columnData } }))
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
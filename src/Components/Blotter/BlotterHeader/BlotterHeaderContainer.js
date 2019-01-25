import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        blotter: ownProps.blotter,
        gridHeaderData: state[ownProps.blotter].headerData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateColumnData: (columnkey, changeData) => dispatch({ type: 'UPDATE_COLUMN_DATA', name: ownProps.blotter, payload: { columnkey, changeData } }),
        populateGridSettings: (headerDataSet) => dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: headerDataSet } }),
        addColumnData: columnData => dispatch({ type: 'ADD_COLUMN_DATA', payload: { headerData: columnData } })
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
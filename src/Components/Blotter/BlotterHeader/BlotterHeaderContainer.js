import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';
import Actions from '../Actions';

const mapStateToProps = (state, ownProps) => {
    return {
        blotter: ownProps.blotter,
        gridHeaderData: state[ownProps.blotter].headerData,
        onScrollHandler: ownProps.onScrollHandler
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateColumnData: (columnkey, changeData) => dispatch({ type: 'UPDATE_COLUMN_DATA', name: ownProps.blotter, payload: { columnkey, changeData } }),
        populateGridSettings: (headerDataSet) => dispatch({ type: 'ADD_COLUMN_DATASET', name: ownProps.blotter, payload: { headerDataSet: headerDataSet } }),
        addColumnData: columnData => dispatch({ type: 'ADD_COLUMN_DATA', name: ownProps.blotter, payload: { headerData: columnData } }),
        reorderColumnData: reorderedKeyList => dispatch(Actions.REORDER_COLULMN_DATASET(ownProps.blotter, reorderedKeyList))
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        headerData: state.gridHeaderData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addColumnDataSet: headerDataSet => (dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: headerDataSet } })),
        addColumnData: columnData => (dispatch({ type: 'ADD_COLUMN_DATA', payload: { headerData: columnData } }))
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';
import BlotterSettings from '../../Amps/BlotterSettings';

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        headerData: state.gridHeaderData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        populateGridSettings : () => (dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: BlotterSettings.riskBS } })),
        addColumnDataSet: headerDataSet => (dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: headerDataSet } })),
        addColumnData: columnData => (dispatch({ type: 'ADD_COLUMN_DATA', payload: { headerData: columnData } }))
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
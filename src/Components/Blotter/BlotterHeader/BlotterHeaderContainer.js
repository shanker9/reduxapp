import { connect } from 'react-redux';
import BlotterHeaderComponent from './BlotterHeaderComponent';
import BlotterSettings from '../../../Amps/BlotterSettings';

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const gridData = `${ownProps.blotter}GridData`;
    const headerData = `${ownProps.blotter}HeaderData`;
    return {
        blotter: ownProps.blotter,
        gridData: state[gridData],
        gridHeaderData: state[headerData]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const headerDataSet = `${ownProps.blotter}BS`;
    return {
        populateGridSettings : () => (dispatch({ type: 'ADD_COLUMN_DATASET', payload: { headerDataSet: BlotterSettings[headerDataSet] } })),
        addColumnData: columnData => (dispatch({ type: 'ADD_COLUMN_DATA', payload: { headerData: columnData } }))
    }
}

const BlotterHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterHeaderComponent);

export default BlotterHeaderContainer;
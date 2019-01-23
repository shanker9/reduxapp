import { connect } from 'react-redux';
import BlotterRowComponent from './BlotterRowComponent';
import Actions from '../Actions';

const mapStateToProps = (state, ownProps) => {
    const stateVar = ownProps.blotter;
    return {
        rowState: state[stateVar].gridData.dataSource.get(ownProps.id),
        rowKey: ownProps.id,
        headerData: state[stateVar].headerData.headerDataSource,
        blotter: ownProps.blotter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rowSelected: (blotter, rowKey, isSelected, isSingleRowSelect) => {
            dispatch(Actions.ROW_SELECTED(blotter, rowKey, isSelected, isSingleRowSelect));
        }
    }
}

const BlotterRowContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterRowComponent);

export default BlotterRowContainer
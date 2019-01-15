import { connect } from 'react-redux';
import BlotterRowComponent from './BlotterRowComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        rowState: state.gridData.dataSource.get(ownProps.id),
        rowKey: ownProps.id,
        headerData: state.gridHeaderData.headerDataSource
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        rowSelected: (rowKey, isSelected) => {
            dispatch({ type: 'ROW_SELECTED', payload: { rowKey: rowKey, isSelected : isSelected } });
        }
    }
}

const BlotterRowContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterRowComponent);

export default BlotterRowContainer
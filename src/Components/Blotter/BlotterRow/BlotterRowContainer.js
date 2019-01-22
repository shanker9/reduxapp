import { connect } from 'react-redux';
import BlotterRowComponent from './BlotterRowComponent';

const mapStateToProps = (state, ownProps) => {
    const gridData = `${ownProps.blotter}GridData`;
    const headerData = `${ownProps.blotter}HeaderData`;

    return {
        rowState: state[gridData].dataSource.get(ownProps.id),
        rowKey: ownProps.id,
        headerData: state[headerData].headerDataSource,
        blotter: ownProps.blotter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        rowSelected: (rowKey, isSelected, isSingleRowSelect) => {
            dispatch({ type: 'ROW_SELECTED', payload: { rowKey: rowKey, isSelected : isSelected, isSingleRowSelect : isSingleRowSelect } });
        }
    }
}

const BlotterRowContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterRowComponent);

export default BlotterRowContainer
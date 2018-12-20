import {connect} from 'react-redux';
import BlotterRowComponent from './BlotterRowComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        data : state.gridData.dataSource.find(i => i.rowKey === ownProps.id).data,
        rowState : state.gridData.dataSource.find(i => i.rowKey === ownProps.id),
        headerData : state.gridHeaderData.headerDataSource
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const BlotterRowContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterRowComponent);

export default BlotterRowContainer;
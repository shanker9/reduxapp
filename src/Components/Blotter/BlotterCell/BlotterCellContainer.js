import {connect} from 'react-redux';
import BlotterCellComponent from './BlotterCellComponent';

const mapStateToProps = (state, ownProps) =>  {
    return {
        cellData : state[ownProps.blotter].gridData.dataSource.get(ownProps.id).data[ownProps.columnconfig.columnvalue],
        columnconfig : state[ownProps.blotter].headerData.headerDataSource.get(ownProps.columnconfig.columnkey)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
};

const BlotterCellContainer = connect(mapStateToProps,mapDispatchToProps)(BlotterCellComponent);

export default BlotterCellContainer
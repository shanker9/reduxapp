import {connect} from 'react-redux';
import BlotterCellComponent from './BlotterCellComponent';

const mapStateToProps = (state, ownProps) =>  {
    const stateVar = ownProps.blotter;
    return {
        cellData : state[stateVar].gridData.dataSource.get(ownProps.id).data[ownProps.columnconfig.columnvalue],
        columnconfig : ownProps.columnconfig
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
};

const BlotterCellContainer = connect(mapStateToProps,mapDispatchToProps)(BlotterCellComponent);

export default BlotterCellContainer
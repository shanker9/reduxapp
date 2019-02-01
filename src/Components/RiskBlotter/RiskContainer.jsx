/* eslint-disable */
import { connect } from 'react-redux';
import Actions from './Actions';

import { AmpsConnector } from '../../Network/SingletonClass';


import RiskComponent from './RiskComponent'

const mapStateToProps = (state) => {
    return {
        gridData: state['risk'].gridData,
        queryData : state['risk'].queryData,
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        visibleRangeUpdates: range => {
            const ampsInstance = AmpsConnector.getInstance();
            ampsInstance.updateVisibleRange(undefined,range);
        },
        subscribeToAmps: (blotter, query) => {
            const ampsInstance = AmpsConnector.getInstance();
            ampsInstance.subscribeToAmps(blotter, Actions, query)
        }
    }
};

const RiskContainer = connect(mapStateToProps, mapDispatchToProps)(RiskComponent);

export default RiskContainer;
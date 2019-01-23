import {connect} from 'react-redux';

import OrdersComponent from './OrdersComponent'

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        subscribeToAmps : ()=>{}
    }
};

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);

export default OrdersContainer;
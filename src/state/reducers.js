import * as AppRoot from '../App/state/app.reducer'
import * as header from '../App/header/state/header.reducer'
import { combineReducers } from 'redux';

import * as RiskBlotterReducer from '../Components/RiskBlotter/state/risk.reducer'
import * as OrdersBlotterReducer from '../Components/OrderBlotter/state/orders.reducer'
import * as PositionsBlotterReducer from '../Components/PostionBlotter/state/positions.reducer'

const index = {
    root: AppRoot.Root,
    navigation: header.navigation,
    orders: combineReducers({
        gridData: OrdersBlotterReducer.gridData,
        headerData: OrdersBlotterReducer.gridHeaderData,
    }),
    risk: combineReducers({
        gridData: RiskBlotterReducer.gridData,
        headerData: RiskBlotterReducer.gridHeaderData,
    }),
    positions: combineReducers({
        gridData: PositionsBlotterReducer.gridData,
        headerData: PositionsBlotterReducer.gridHeaderData,
    })
};

export default index;
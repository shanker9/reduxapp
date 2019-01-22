import * as AppRoot from '../App/state/app.reducer'
import * as header from '../App/header/state/header.reducer'

import * as RiskBlotterReducer from '../Components/RiskBlotter/state/risk.reducer'
import * as OrdersBlotterReducer from '../Components/OrderBlotter/state/orders.reducer'
import * as PositionsBlotterReducer from '../Components/PostionBlotter/state/positions.reducer'

const index = {
    root: AppRoot.Root,
    navigation: header.navigation,

    ordersGridData: OrdersBlotterReducer.gridData,
    ordersHeaderData: OrdersBlotterReducer.gridHeaderData,

    riskGridData: RiskBlotterReducer.gridData,
    riskHeaderData: RiskBlotterReducer.gridHeaderData,

    positionsGridData: PositionsBlotterReducer.gridData,
    positionsHeaderData: PositionsBlotterReducer.gridHeaderData,
};

export default index;
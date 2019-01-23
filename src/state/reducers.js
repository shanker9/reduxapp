import * as AppRoot from '../App/state/app.reducer'
import * as header from '../App/header/state/header.reducer'
import { combineReducers } from 'redux';

import * as BlotterReducers from '../Components/Blotter/Reducers/BlotterReducers';


const createFilteredReducer = (reducerFunction, reducerPredicate) => {
    return (state, action) => {
        const isInitializationCall = state === undefined;
        const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;
        return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
    }
}


const index = {
    root: AppRoot.Root,
    navigation: header.navigation,
    orders: combineReducers({
        gridData: createFilteredReducer(BlotterReducers.gridData, action => action.name === 'orders'),
        headerData: BlotterReducers.gridHeaderData,
    }),
    risk: combineReducers({
        gridData: createFilteredReducer(BlotterReducers.gridData, action => action.name === 'risk'),
        headerData: BlotterReducers.gridHeaderData,
    }),
    positions: combineReducers({
        gridData: createFilteredReducer(BlotterReducers.gridData, action => action.name === 'positions'),
        headerData: BlotterReducers.gridHeaderData,
    })
};

export default index;
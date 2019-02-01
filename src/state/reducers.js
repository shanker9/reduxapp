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
        headerData: createFilteredReducer(BlotterReducers.gridHeaderData, action => action.name === 'orders'),
    }),
    risk: combineReducers({
        gridData: createFilteredReducer(BlotterReducers.gridData, action => action.name === 'risk'),
        headerData: createFilteredReducer(BlotterReducers.gridHeaderData, action => action.name === 'risk'),
        queryData : createFilteredReducer(BlotterReducers.queryData, action => action.name === 'risk'),
    }),
    positions: combineReducers({
        gridData: createFilteredReducer(BlotterReducers.gridData, action => action.name === 'positions'),
        headerData: createFilteredReducer(BlotterReducers.gridHeaderData, action => action.name === 'positions'),
    })
};

export default index;
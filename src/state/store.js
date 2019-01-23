import {createStore, combineReducers} from 'redux';
import reducers from './reducers';
import initialData from './PreloadData/hydrateStore';

import { AmpsConnector } from '../Network/SingletonClass';

const rootReducer = combineReducers(reducers);
const preloadedState = initialData();

const store = createStore(rootReducer, preloadedState);

AmpsConnector.getInstance(store);

/** STRICTLY FOR DEBUGGING PURPOSES */
window.store = store;

export default store;
import {createStore, combineReducers} from 'redux';
import reducers from './reducers';
import initialData from './PreloadData/hydrateStore';

const rootReducer = combineReducers(reducers);
const preloadedState = initialData();

const store = createStore(rootReducer, preloadedState);

/** STRICTLY FOR DEBUGGING PURPOSES */
window.store = store;

export default store;
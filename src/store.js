import {createStore, combineReducers} from 'redux';
import reducers from './app/reducers';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
window.store = store;

export default store;
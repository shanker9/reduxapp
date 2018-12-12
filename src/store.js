import {createStore, combineReducers} from 'redux';
import reducers from './app/reducers';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);


export default store;
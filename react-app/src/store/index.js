import { createStore } from 'redux';
import loaderReducer from '../helper/reducers/loader.reducer';

let store = createStore(loaderReducer);
export default store;
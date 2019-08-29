import {createStore , applyMiddleware} from 'redux';
import Thunk from  'redux-thunk';
import RootReducer from '../reducers/index';



const store = createStore(RootReducer, applyMiddleware(Thunk));

export default store;
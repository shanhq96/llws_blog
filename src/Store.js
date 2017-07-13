/**
 * Created by Administrator on 2017/6/29.
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';

import {reducer as contentReducer} from './content/';


// import {reducer as headReducer} from './head';

const middlewares = [thunkMiddleware];

const reducer = combineReducers({
    weather: contentReducer
});



export default createStore(reducer);
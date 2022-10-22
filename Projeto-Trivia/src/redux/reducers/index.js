import { combineReducers } from 'redux';
import player from './player';
import timer from './timer';

const rootReducer = combineReducers({ timer, player });

export default rootReducer;

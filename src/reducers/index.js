import {combineReducers} from 'redux';
import cartReducer from './cart';

const allReducers = combineReducers({
    cartReducer,
    // Them cac reducer o day
})

export default allReducers;
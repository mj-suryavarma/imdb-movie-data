import searchReducer from './searchReducer';
import {combineReducers} from 'redux';


const allReducers = combineReducers({

     keyword : searchReducer
})
 
export default allReducers;
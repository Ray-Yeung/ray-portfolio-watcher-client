import {combineReducers} from 'redux';
import user from './userReducer';
import stockReducer from './stockReducer';

const reducer = combineReducers({
  user,
  stockReducer
})

export default reducer;
import {combineReducers} from 'redux';
import user from './userReducer';
import stockReducer from './stockReducer';

const reducer = combineReducers({
  user,
  stocks: stockReducer
})

export default reducer;
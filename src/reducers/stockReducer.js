import { ADD_STOCK, DELETE_STOCK } from '../actions/stockActions';

const initialState = {
  stocks: [],
  showStock: false,
}

export const stockReducer = (state=initialState, action) => {
  if(action.type = ADD_STOCK) {
    return Object.assign({}, state, {
      stocks: [...state.stocks, action.stock]
    });
  }
  else if(action.type = DELETE_STOCK) {
    return Object.assign({}, state, {
      stocks: state.stocks.filter(stock => stock.id !== action.stock.id)
    });
  }
  return state;
};

export default stockReducer;

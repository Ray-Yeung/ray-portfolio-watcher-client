import { ADD_STOCK, DELETE_STOCK, HANDLE_ONCHANGE, HANDLE_ONCLICK, FETCH_STOCK_SUCCESS } from '../actions/stockActions';

const initialState = {
  stocks: [],
  value: '',
  featuredStock: {}
}

export const stockReducer = (state=initialState, action) => {
    console.log("hello", action);
    if(action.type === ADD_STOCK) {
    return Object.assign({}, state, {
      stocks: [...state.stocks, action.stock]
    });
  }
  else if(action.type === DELETE_STOCK) {
    return Object.assign({}, state, {
      stocks: state.stocks.filter(stock => stock.id !== action.stock.id)
    });
  }
//   else if(action.type = HANDLE_ONCHANGE) {
//     return Object.assign({}, state, {
//       value:
//     });
//   }
  else if(action.type === HANDLE_ONCLICK) {
    return Object.assign({}, state, {
      value: action.value
    });
  }
  
  else if(action.type === FETCH_STOCK_SUCCESS) {
    
    return Object.assign({}, state, {
      featuredStock: action.stock
    });
  }
  return state;
};

export default stockReducer;

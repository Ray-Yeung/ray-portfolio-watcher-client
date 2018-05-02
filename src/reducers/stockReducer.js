import { 
  ADD_STOCK, 
  DELETE_STOCK, 
  // HANDLE_ONCHANGE, 
  HANDLE_ONCLICK, 
  FETCH_STOCK_SUCCESS ,
  FETCH_LOGO_SUCCESS,
  POPULATE_STATE_STOCKS,
  POPULATE_STATE_LOGOS
  } from '../actions/stockActions';

const initialState = {
  stocks: [],
  value: '',
  searchedStock: {},
  logo: []
}

export const stockReducer = (state=initialState, action) => {
    // console.log("hello", action);
    
    if(action.type === ADD_STOCK) {
    console.log('test add stock');
    return Object.assign({}, state, {
      stocks: [...state.stocks, action.stock]
    });
  }
  else if(action.type === DELETE_STOCK) {
    console.log('test');
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
      searchedStock: action.stock
    });
  }
  else if(action.type === FETCH_LOGO_SUCCESS) {
    return Object.assign({}, state, {
      logo: [...state.logo, action.logo]
    });
  }
  else if(action.type === POPULATE_STATE_STOCKS) {
    return Object.assign({}, state, {
      stocks: action.stocks
    });
  }
  else if(action.type === POPULATE_STATE_LOGOS) {
    return Object.assign({}, state, {
      logo: action.logos
    });
  }
  return state;
};

export default stockReducer;

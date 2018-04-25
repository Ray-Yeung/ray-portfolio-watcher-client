import { API_BASE_URL } from '../config';

export const FETCH_STOCKS_REQUEST = 'FETCH_STOCKS_REQUEST';
export const fetchStocksRequest = () => ({
  type: FETCH_STOCKS_REQUEST
});

export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const fetchStockSuccess = stock => ({
  type: FETCH_STOCK_SUCCESS,
  stock
});

export const FETCH_STOCKS_ERROR = 'FETCH_STOCKS_ERROR';
export const fetchStocksError = () => ({
  type: FETCH_STOCKS_ERROR
});

export const ADD_STOCK = 'ADD_STOCK';
export const addStock = stock => ({
  type: ADD_STOCK,
  stock
});

export const DELETE_STOCK = 'DELETE_STOCK';
export const deleteStock = stock => ({
  type: DELETE_STOCK,
  stock
});

export const HANDLE_ONCHANGE = 'HANDLE_ONCHANGE';
export const handleOnChange = value => ({
  type: HANDLE_ONCHANGE,
  value
});

export const HANDLE_ONCLICK = 'HANDLE_ONCLICK';
export const handleOnClick = value => ({
  type: HANDLE_ONCLICK,
  value
});

export const fetchStock = (stock) => {
  return(dispatch) => {
    fetch('https://api.iextrading.com/1.0/stock/aapl/quote', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => dispatch(fetchStockSuccess(data)))
    .catch(err => console.log(err))
  }
};
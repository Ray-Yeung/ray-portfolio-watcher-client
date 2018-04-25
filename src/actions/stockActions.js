import { API_BASE_URL } from '../config';

export const FETCH_STOCKS_REQUEST = 'FETCH_STOCKS_REQUEST';
export const fetchStocksRequest = () => ({
  type: FETCH_STOCKS_REQUEST
});

export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const fetchStocksSuccess = stocks => ({
  type: FETCH_STOCKS_SUCCESS,
  stocks
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
})


export const fetchStock = (stock) => {
  return(dispatch) => {
    fetch('https://api.iextrading.com/1.0/stock/aapl/quote', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({stock})
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }
};
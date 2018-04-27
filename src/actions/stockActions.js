import { API_BASE_URL } from '../config';
// import SearchBar from '../components/main/searchBar';

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

export const FETCH_LOGO_SUCCESS = 'FETCH_LOGO_SUCCESS';
export const fetchLogoSuccess = () => ({
  type: FETCH_LOGO_SUCCESS
});

export const ADD_STOCK = 'ADD_STOCK';
export const addStock = stock => ({
  type: ADD_STOCK,
  stock
});

// export const DELETE_STOCK = 'DELETE_STOCK';
// export const deleteStock = stock => ({
//   type: DELETE_STOCK,
//   stock
// });

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

export const fetchStock = (company) => {
  console.log(company);
  return(dispatch) => {
    fetch(`https://api.iextrading.com/1.0/stock/${company}/quote`, {
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

export const fetchLogo = (company) => {
  return(dispatch) => {
    fetch(`https://api.iextrading.com/1.0/stock/${company}/logo`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => dispatch(fetchLogoSuccess(data)))
    .catch(err => console.log(err))
  }
};

export const createStock = (stock, userId, authToken) => {
  console.log(stock, userId, authToken);
  return(dispatch) => {
    fetch(`${API_BASE_URL}/api/stock/${userId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(stock)
    })
    .then(response => response.json())
    .then(response => dispatch(addStock(response)))
    .catch(err => console.log(err))
  }
};

export const deleteStock = (stockId, userId, authToken) => {
  return(dispatch) => {
    fetch(`${API_BASE_URL}/api/stock/${userId}}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({stockId})
    })
    .then(response => response.json())
    .then(data => dispatch(fetchStockSuccess(data)))
    .catch(err => console.log(err))
  }
};
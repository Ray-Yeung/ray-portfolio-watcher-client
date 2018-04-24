import { API_BASE_URL } from '../config';
// import history from '../history';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (userId, token) => ({
  type: LOGIN_USER_SUCCESS,
  userId,
  token
});


export const registerUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(json => window.location = '/login')
    .catch(err => console.log(err))
  }
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(response => {
      localStorage.setItem('authToken', response.authToken)
      localStorage.setItem('userId', response.userId)
      dispatch(loginUserSuccess(response.userId, response.authToken))
    })
    .catch(err => console.log(err))
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.clear()
  }
};
import {LOGIN_USER_SUCCESS} from '../actions/authAction';

const initialState = {
  loggedIn: false,
  userId: null,
  authToken: null
};

export function user(state = initialState, action) {
  if(action.type === LOGIN_USER_SUCCESS) {
    return Object.assign({}, state, {
      loggedIn: true,
      userId: action.userId,
      authToken: action.token
    });
  }
  return state;
};

export default user;
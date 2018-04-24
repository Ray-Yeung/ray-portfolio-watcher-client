import React from 'react';
import {connect} from 'react-redux';
import { loginUser } from '../../../actions/authActions';

const Login = ({ dispatch }) => (
  <div className="container">
    <h1>Login</h1>
    <form onSubmit={event => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.username.value;
      dispatch(loginUser(username, password));
    }}>
      <input type="text" name="username"/>
      <input type="text" name="password"/>
      <button>Submit</button>
    </form>
  </div>
)

export default connect()(Login);
import React from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

const Register = ({ dispatch }) => (
  <div>
    <h1>Register</h1>
    <form onSubmit={event => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      dispatch(registerUser(username, password));
    }}>
      <label htmlFor="username">Username</label> <br/>
      <input type="text" name="username"/> <br/>
      <br/>
      <label htmlFor="password">Password</label> <br/>
      <input type="text" name="password"/> <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default connect()(Register);
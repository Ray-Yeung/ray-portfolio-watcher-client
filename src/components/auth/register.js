import React from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import './register.css';

const Register = ({ dispatch }) => (
  <div className="RegisterPage">
    <h1 className="Register__Title">Register</h1>
    <form onSubmit={event => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      dispatch(registerUser(username, password));
    }}>
      <label className="Username__Label" htmlFor="username">Username</label> <br/>
      <input 
        className="RegisterUsername__Input" 
        type="text"
        name="username" 
        autoComplete="current-username"
      /> <br/>
      <br/>
      <label className="Password__Label" htmlFor="password">Password</label> <br/>
      <input 
        className="RegisterPassword__Input" 
        type="password" 
        name="password" 
        autoComplete="current-password"
      /> <br/>
      <br/>
      <button className="Register__Button" type="submit">Submit</button>
    </form>
  </div>
)

export default connect()(Register);
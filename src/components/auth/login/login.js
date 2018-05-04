import React from 'react';
import {connect} from 'react-redux';
import { loginUser } from '../../../actions/authActions';
import './login.css';

const Login = ({ dispatch }) => (
  <div className="LoginPage">
    <h1 className="Login__Title">Login</h1>
    <form onSubmit={event => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      dispatch(loginUser(username, password));
    }}>
      <label className="Username__Label" htmlFor="username">Username</label> <br/>
      <input 
        className="LoginUsername__Input" 
        type="text" 
        autoComplete="current-username"
        name="username"
      /> <br/>
      <br/>
      <label className="Password__Label" htmlFor="password">Password</label> <br/>
      <input 
        className="LoginPassword__Input" 
        type="password" 
        autoComplete="current-passwod" 
        name="password"
      /> <br/>
      <br/>
      <button className="Login__Button" type="submit">Submit</button>
    </form>
  </div>
)

export default connect()(Login);
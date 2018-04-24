import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import HomePage from './components/HomePage';
import Register from './components/auth/register';
import Login from './components/auth/login/login';
import { loginUserSuccess } from './actions/authActions';
import { Router, Route, Redirect, Switch } from 'react-router-dom';



class App extends React.Component {
  componentDidMount() {
    if(localStorage.getItem('authToken')) {
      const authToken = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');

      this.props.dispatch(loginUserSuccess(userId, authToken))
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

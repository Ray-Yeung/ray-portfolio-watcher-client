import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import HomePage from './components/HomePage';
import Register from './components/auth/register';
import Login from './components/auth/login/login';
import { loginUserSuccess } from './actions/authActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/main/MainPage';


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
            <Route exact path="/main" component={MainPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home__Title">Portfolio Watcher</h1>
        <Link to="/register">
            <button className="Register__Button" type="submit">Register</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login">
            <button className="Login__Button" type="submit">Login</button>
        </Link>
        <br/>
        <p className="Home__Text">
          WELCOME TO PORTFOLIO WATCHER! <br/>
          <br/>
          Portfolio Watcher is designed to allow the user to keep <br/>
          track of stocks displaying essential data for an investor <br/>
          to efficiently obtain the information they need.
        </p>
      </div>
    );
  }
};

export default HomePage;
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
        <Link to="/login">
            <button className="Login__Button" type="submit">Login</button>
        </Link>
      </div>
    );
  }
};

export default HomePage;
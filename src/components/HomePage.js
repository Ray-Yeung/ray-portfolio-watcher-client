import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to your Stock Portfolio</h1>
        <Link to="/register">
            <button type="submit">Register</button>
        </Link>
        <Link to="/login">
            <button type="submit">Login</button>
        </Link>
      </div>
    );
  }
};

export default HomePage;
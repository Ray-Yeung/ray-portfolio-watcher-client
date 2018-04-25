import React from 'react';
import {connect} from 'react-redux';
import './searchBar.css';

export function SearchBar(props) {
  return (
    <div className="searchBar">
      <form className="searchBar-form">
        <input className="searchBar-input"/>
        <button className="searchBar-button">Search</button>
      </form>
    </div>
  );
};

export default connect()(SearchBar);




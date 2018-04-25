import React from 'react';
import {connect} from 'react-redux';
import './searchBar.css';

export function SearchBar(props) {
  return (
    <div className="searchBar">
      <form className="searchBar-form">
        <input className="searchBar-input" value="input"/>
        <button className="searchBar-button" onClick={props.onClick}>Search</button>
      </form>
    </div>
  );
};

export default connect()(SearchBar);




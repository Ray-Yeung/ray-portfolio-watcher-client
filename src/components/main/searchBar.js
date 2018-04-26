import React from 'react';
import {connect} from 'react-redux';
import './searchBar.css';
import {fetchStock} from '../../actions/stockActions';

export function SearchBar(props) {
  return (
    <div className="searchBar">
      <form onSubmit={event => {
        event.preventDefault();
        const search = document.getElementById("searchText").value;
        props.dispatch(fetchStock(search));
        // className="searchBar-form"
        // console.log(search);
      }}>
        <label htmlFor="searchBar">Search Stock</label>
        <input className="searchBar-input" id="searchText"/>
        <button className="searchBar-button">Search</button>
      </form>
    </div>
  );
};

export default connect()(SearchBar);




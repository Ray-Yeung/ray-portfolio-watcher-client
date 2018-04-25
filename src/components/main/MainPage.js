import React from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import StockCard from './stockCard';
import SearchBar from './searchBar';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <StockCard />
      </div>
    );
  }
};

export default connect()(MainPage);
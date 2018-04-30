import React from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import StockCard from './stockCard';
// import SearchBar from './searchBar';
import SearchStock from './searchStock';
import StockList from './stockList';
import StockCard2 from './stockCard2';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SearchStock />
        <StockList />
        {/* <StockCard /> */}
        <StockCard2 />
      </div>
    );
  }
};

export default connect()(MainPage);
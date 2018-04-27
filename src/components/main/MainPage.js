import React from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
// import StockCard from './stockCard';
// import SearchBar from './searchBar';
import AddStock from './addStock';
import StockList from './stockList';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        {/* <SearchBar /> */}
        <AddStock />
        {/* <StockCard /> */}
        <StockList />
      </div>
    );
  }
};

export default connect()(MainPage);
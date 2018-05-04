import React from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import AddStock from './addStock';
import StockList from './stockList';


export class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <h1 className="MainPage__Title">Portfolio</h1>
        <AddStock />
        <StockList />
      </div>
    );
  }
};

export default connect()(MainPage);
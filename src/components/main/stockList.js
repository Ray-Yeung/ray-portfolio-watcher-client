import React from 'react';
import {connect} from 'react-redux';
import './stockList.css';
import { createStock, fetchStock, deleteStock } from '../../actions/stockActions';

export class StockList extends React.Component {
  componentDidUpdate() {
    if(this.props.userId && this.props.stocks.length <= 0) {
      console.log(this.props);
      this.props.dispatch(fetchStock(this.props.userId, this.props.authToken))
    } 
  }

 

  render() {
    console.log(this.props.stocks);
    const stocks = this.props.stocks;
    const listStocks = stocks.map((stock => 
      <li key={stocks.id}>{stocks}</li>))
    return (
      <div>
          <h3>{this.props.searchedStock.companyName}</h3>
          <div>
            {this.props.searchedStock.symbol} <br/>
            {this.props.searchedStock.open} <br/>
            {this.props.searchedStock.latestPrice} <br/>
          </div>
          <button 
            className="addStock-button"
            onClick={() => this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))}
          >Add stock</button>
          {/* <button label="Delete" value="Delete" onClick={() => this.props.dispatch(deleteStock())}>Delete</button> */}
      
          {/* {this.props.stocks.map(stock => <li key={}>{stock.companyName}</li>)} */}
          {stocks}
      </div>
    );
  }
  
};

const mapStateToProps = state => {
  console.log(state);
  return {
  
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken,
  stocks: state.stockReducer.stocks
}};

export default connect(mapStateToProps)(StockList);
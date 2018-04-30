import React from 'react';
import {connect} from 'react-redux';
// import './stockList.css';
import { createStock, fetchStock, deleteStock } from '../../actions/stockActions';
import stockCard from './stockCard';

export class StockList2 extends React.Component {
  componentDidUpdate() {
    if(this.props.userId && this.props.stocks.length <= 0) {
      console.log(this.props);
      this.props.dispatch(fetchStock(this.props.userId, this.props.authToken))
    } 
  }


  removeCard(stock) {
    let index = this.props.stocks.indexOf(stock);

    if(index > -1) {
      return [...this.props.stocks.slice(0, index), ...this.props.stocks.slice(index+1)];
    }
  }
 

  render() {
    // const stocks = this.props.stocks[37];
    // console.log(stocks);
    
    // const listStocks = stocks.map((stock => 
    //   <li key={stocks.id}>{stocks}</li>))
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
      
          {this.props.stocks.map(stock => <li>{stock.companyName}</li>)}
          {/* {stocks} */}
      </div>
    )
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

export default connect(mapStateToProps)(StockList2);
import React from 'react';
import {connect} from 'react-redux';
import { createStock, fetchStock, deleteStock } from '../../actions/stockActions';

class StockCard extends React.Component {
  componentDidUpdate() {
    if(this.props.userId && this.props.stocks.length <= 0) {
      this.props.dispatch(fetchStock(this.props.userId, this.props.authToken))
    } 
  }

  render() {
    console.log(this.props.stocks[37]);
    const stockItem = this.props.stocks
    return (
      <div>
          <li className="stock-card">
            {this.props.stocks.companyName}
            {this.props.stocks.symbol}
            {this.props.stocks.primaryExchange}
            {this.props.stocks.sector}
            {this.props.stocks.open}
            {this.props.stocks.latestPrice}
          </li>
          {/* <ul>
            <li>Symbol: {this.props.stocks.}</li> <br/>
            <li>Company: {this.props.searchedStock.companyName}</li> <br/>
            <li>Opening price: ${this.props.searchedStock.open}</li> <br/>
            <li>Current price: ${this.props.searchedStock.latestPrice}</li> <br/>
          </ul> */}
          <br/>
          <button type="submit">Save stock</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken,
  stocks: state.stockReducer.stocks
}};

export default connect(mapStateToProps)(StockCard);
import React from 'react';
import {connect} from 'react-redux';
import './stockList.css';
import { fetchStock, fetchLogo, removeStock } from '../../actions/stockActions';
import StockCard from './stockCard';

export class StockList extends React.Component {
  componentDidUpdate() {
    if(this.props.userId && this.props.stocks.length <= 0) {
      this.props.dispatch(fetchStock(this.props.userId, this.props.authToken))
      this.props.dispatch(fetchLogo(this.props.userId, this.props.authToken))
      // const logo = this.props.dispatch(fetchLogo())
      // this.setState();
    } 
    // const loadLogo = this.props.dispatch(fetchLogo())
    // if(this.props.stocks.length >= 1) {
      // console.log(this.props.logo);
    // }
  }
 
  render() {

    const stockCard = this.props.stocks.map((stock, index) => {
      return (
        <div key={index}>
        <StockCard 
          symbol={stock.symbol}
          companyName={stock.companyName}
          primaryExchange={stock.primaryExchange}
          sector={stock.sector}
          open={stock.open}
          latestPrice={stock.latestPrice}
        />
        <button
          className="removeStock-button"
          onClick={() => this.props.dispatch(removeStock(stock._id, this.props.userId, this.props.authToken))}
        >Delete</button>
        </div>
      );
    });
  
    return (
      <div className="StockList"> 
          {/* {this.props.stocks.map((stock, index) => <li key={index}>{stock.companyName}</li>)} */}
          {stockCard}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
  searchedStock: state.stockReducer.searchedStock,
  stocks: state.stockReducer.stocks,
  userId: state.user.userId,
  authToken: state.user.authToken,
  stockId: state.user.stockId,
  logo: state.stockReducer.logo
}};

export default connect(mapStateToProps)(StockList);
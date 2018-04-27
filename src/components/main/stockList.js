import React from 'react';
import {connect} from 'react-redux';
import './stockList.css';
import {createStock, fetchStock, deleteStock} from '../../actions/stockActions';

export class StockList extends React.Component {
  render() {
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
      </div>
    );
  }
  
};

const mapStateToProps = state => ({
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken
});

export default connect(mapStateToProps)(StockList);
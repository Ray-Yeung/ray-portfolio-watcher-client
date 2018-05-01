import React from 'react';
import {connect} from 'react-redux';
import { createStock, fetchStockApi } from '../../actions/stockActions';
import StockInfo from './stockInfo';

class SearchStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("searchText").value;
    this.props.dispatch(fetchStockApi(search));
    // console.log(search);
  }
 
  onClick(search) {
    this.props.dispatch(fetchStockApi(search))
  }

  render() {
    console.log(this.props.searchedStock);
    const stock = this.props.searchedStock;


    return (
      <div className="searchStock">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="searchStock-input" id="searchText"/>
          <button
            className="searchStock-button"
            onClick={search => this.props.dispatch(fetchStockApi(search))}
          >Search Stock</button>
        
        </form>
        <StockInfo 
          companyName={stock.companyName}
        />
        <button 
          className="addStock-button"
          onClick={() => this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))}
        >Add stock</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken
});

export default connect(mapStateToProps)(SearchStock);
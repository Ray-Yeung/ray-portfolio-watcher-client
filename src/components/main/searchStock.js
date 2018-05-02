import React from 'react';
import {connect} from 'react-redux';
import { createStock, fetchStockApi, fetchLogo, fetchLogoApi } from '../../actions/stockActions';
import StockInfo from './stockInfo';
import './searchStock.css';

class SearchStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("searchText").value;
    this.props.dispatch(fetchStockApi(search));
    this.props.dispatch(fetchLogoApi(search)); 
  }
 
  onClick(search) {
    this.props.dispatch(fetchStockApi(search))
  }

  render() {
    console.log(this.props.searchedStock);
    const stock = this.props.searchedStock;
    // console.log(this.props.logo.url);

    return (
      <div className="SearchBar">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="SearchBar__Input" id="searchText"/>
          <button
            className="SearchBar__Button"
            onClick={search => this.props.dispatch(fetchStockApi(search))}
          >Search Stock</button>
        
        </form>
        <StockInfo 
          companyName={stock.companyName}
        />
        <button 
          className="AddStock__Button"
          onClick={() => this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))}
        >Add stock</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken,
  logo: state.stockReducer.logo
});

export default connect(mapStateToProps)(SearchStock);
import React from 'react';
import {connect} from 'react-redux';
import { fetchStockApi } from '../../actions/stockActions';
import './addStock.css';

class AddStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("searchText").value;
    this.props.dispatch(fetchStockApi(search));
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="SearchBar__Input" id="searchText"/>
          <button
            className="SearchBar__Button"
            onClick={search => 
              this.props.dispatch(fetchStockApi(search))}
              // this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))
          >Add Stock To Portfolio</button>   
        </form>
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

export default connect(mapStateToProps)(AddStock);
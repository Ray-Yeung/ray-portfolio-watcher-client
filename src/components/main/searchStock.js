import React from 'react';
import {connect} from 'react-redux';
import {fetchStockApi} from '../../actions/stockActions';

class SearchStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("searchText").value;
    this.props.dispatch(fetchStockApi(search));
    console.log(search);
  }
  

  render() {
    
    return (
      <div className="searchStock">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="searchStock-input" id="searchText"/>
          <button
            className="searchStock-button"
            onClick={search => this.props.dispatch(fetchStockApi(search))}
          >Search Stock</button>
        </form>
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
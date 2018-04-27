import React from 'react';
import {connect} from 'react-redux';
import {fetchStock} from '../../actions/stockActions';

class AddStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("searchText").value;
    this.props.dispatch(fetchStock(search));
    console.log(search);
  }
  

  render() {
    
    return (
      // <div className="addStock">
      //   <form onSubmit={event => this.onSubmit(event)}>
      //     <label htmlFor="addStock">Search Stock</label>
      //     <input className="addStock-input" id="searchText"/>
      //     <button 
      //       className="addStock-button"
      //       onClick={() => this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))}
      //     >Search stock</button>
      //   </form>
      // </div>
      <div className="searchStock">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="searchStock-input" id="searchText"/>
          <button
            className="searchStock-button"
            onClick={search => this.props.dispatch(fetchStock(search))}
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

export default connect(mapStateToProps)(AddStock);
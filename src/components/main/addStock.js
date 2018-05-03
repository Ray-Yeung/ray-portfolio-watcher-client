import React from 'react';
import {connect} from 'react-redux';
import { fetchStockApi } from '../../actions/stockActions';
import { logoutUser } from '../../actions/authActions';
import './addStock.css';

class AddStock extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const search = document.getElementById("AddStock").value;
    this.props.dispatch(fetchStockApi(search));
  }

  render() {
    return (
      <div className="AddStock">
        <form onSubmit={event => this.onSubmit(event)}>
          <input className="AddStock__Input" id="AddStock"/>
          <button
            className="AddStock__Button"
            onClick={search => 
              this.props.dispatch(fetchStockApi(search))}
              // this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))
          >Add Stock To Portfolio</button>   
        </form>
        <button 
          className="AddStock__LogoutButton"
          onClick={() => this.props.dispatch(logoutUser())}
        >Logout</button>      
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
import React from 'react';
import {connect} from 'react-redux';
// import {fetchLogo} from '../../actions/stockActions';

class StockCard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchLogo())
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <img src={this.props.stocks.logo}> */}
          <ul>
            <li>Symbol: {this.props.searchedStock.symbol}</li> <br/>
            <li>Company: {this.props.searchedStock.companyName}</li> <br/>
            <li>Opening price: ${this.props.searchedStock.open}</li> <br/>
            <li>Current price: ${this.props.searchedStock.latestPrice}</li> <br/>
          </ul>
          <br/>
          <button type="submit">Save stock</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchedStock: state.stockReducer.searchedStock,
  logo: state.stockReducer.logo
});

export default connect(mapStateToProps)(StockCard);
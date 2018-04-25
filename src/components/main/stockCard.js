import React from 'react';

import {connect} from 'react-redux';
import {fetchStock} from '../../actions/stockActions';

export class StockCard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStock())
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Hello
        {this.props.featuredStock.symbol}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {featuredStock: state.stocks.featuredStock}
}

export default connect(mapStateToProps)(StockCard);
import React from 'react';

import {connect} from 'react-redux';

export class StockCard extends React.Component {
  render() {
    return (
      <div>
        test card
      </div>
    );
  }
};

export default connect()(StockCard);
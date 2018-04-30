import React from 'react';
import {connect} from 'react-redux';

const StockInfo = (stock) => {
  return (
    <div>
      {stock.companyName}
    </div>
  );
}

export default StockInfo;
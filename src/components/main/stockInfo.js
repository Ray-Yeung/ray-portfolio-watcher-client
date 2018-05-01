import React from 'react';
// import './stockInfo.css';

const StockInfo = (stock) => {
  return (
    <div className="StockInfo">
      {stock.companyName}
    </div>
  );
}

export default StockInfo;
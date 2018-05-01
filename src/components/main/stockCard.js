import React from 'react';
import './stockCard.css';

const StockCard = (stock) => {
  return(
    <li className="StockCard">
      <div className="StockCard_Symbol"><span>Stock: </span>{stock.symbol}</div>
      <div className="StockCard_CompanyName"><span>Company Name: </span>{stock.companyName}</div>
      <div className="StockCard_PrimaryExchange"><span>Primary Exchange: </span>{stock.primaryExchange}</div>
      <div className="StockCard_Sector"><span>Sector: </span>{stock.sector}</div>
      <div className="StockCard_Open"><span>Opening Price: </span>{stock.open}</div>
      <div className="StockCard_LatestPrice"><span>Latest Price: </span>{stock.latestPrice}</div>
    </li>
  );
};

export default StockCard;
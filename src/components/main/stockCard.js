import React from 'react';
import './stockCard.css';

const StockCard = (stock) => {
  return(
    <li className="StockCard">
      <h3>{stock.companyName}</h3>
      <h5>{stock.symbol}</h5>
      <br/>
      <div className="StockCard_PrimaryExchange"><span>Primary Exchange: </span>{stock.primaryExchange}</div>
      <div className="StockCard_Sector"><span>Sector: </span>{stock.sector}</div>
      <div className="StockCard_Open"><span>Opening Price: </span>${stock.open.toFixed(2)}</div>
      <div className="StockCard_LatestPrice"><span>Latest Price: </span>${stock.latestPrice.toFixed(2)}</div>
      <div className="StockCard_Week52High"><span>52 Week High: </span>${stock.week52High.toFixed(2)}</div>
      <div className="StockCard_Week52Low"><span>52 Week Low: </span>${stock.week52Low.toFixed(2)}</div>
      {/* <div className="StockCard_peRatio"><span>Price-Earnings Ratio: </span>${stock.peRatio.toFixed(2)}</div> */}
    </li>
  );
};

export default StockCard;
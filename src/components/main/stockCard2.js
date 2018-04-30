import React from 'react';
import {connect} from 'react-redux';
import { createStock, fetchStock, deleteStock } from '../../actions/stockActions';

const StockCard2 = (stock) => {
  return(
    <li className="stock-card2">
      <div><span>Stock: </span>{stock.symbol}</div>
      <div><span>Company Name: </span>{stock.companyName}</div>
      <div><span>Primary Exchange: </span>{stock.primaryExhcange}</div>
      <div><span>Sector: </span>{stock.sector}</div>
      <div><span>Opening Price: </span>{stock.open}</div>
      <div><span>Latest Price: </span>{stock.latestPrice}</div>
    </li>
  );
};

export default StockCard2;
import React from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import StockCard from './stockCard';


export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <StockCard />
      </div>
    );
  }
};

export default connect()(MainPage);
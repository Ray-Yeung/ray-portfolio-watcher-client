import React from 'react';
import {shallow} from 'enzyme';

import StockList from './stockList';

describe('<StockList />', () => {
  const seedCards = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedCards.push(`Card ${i}`);
    }
  });
  
  it('Renders without crashing', () => {
    shallow(<StockList />);
  });

  
});
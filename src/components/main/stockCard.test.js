import React from 'react';
import {shallow} from 'enzyme';

import StockCard from './stockCard';

describe('<StockCard />', () => {
  it('Renders without crashing', () => {
    shallow(<StockCard />);
  });

  it('Renders the company name', () => {
    const companyName = "Amazon";
    const wrapper = shallow(<StockCard companyName={companyName} />);
    expect(wrapper.companyName()).toEqual(companyName);
  })
});
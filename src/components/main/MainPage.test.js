import React from 'react';
import {shallow} from 'enzyme';

import MainPage from './MainPage';

describe('<MainPage/>', () => {
  it('Should render without crashing', () => {
    shallow(<MainPage />);
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';
import { mockProps } from './DaysToSummer.test.mock';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();    
  });

  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });

  it('should recive title from props', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual('10 days till summer');
  });

});
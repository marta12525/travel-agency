import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct url link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
    console.log(component.debug());
  });

  it('should get <img> to have correct src and alt', () => {
    const expectedImg = 'image.jpg';
    const expectedAlt = 'description';
    const component = shallow(<TripSummary image={expectedImg} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImg);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    //console.log(component.debug());
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'asd';
    const expectedCost = '123';
    const expectedDays = 3;
    const component = shallow(<TripSummary name={expectedName} days={expectedDays} cost={expectedCost} />);

    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array correctly', () => {
    const expectedArray = ['lorem', 'ipsum', 'dolor'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
    console.log(component.debug());
  });

  it('does not render div if tags array is empty or not given', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toEqual({});
    console.log(component.debug());
  });
});
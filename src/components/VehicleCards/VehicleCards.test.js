import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import VehicleCard        from './VehicleCards';
import renderer           from 'react-test-renderer';


describe('VehicleCard', () => {
  const fakeCar = {
    name: 'honda',
    model: 'cr-v',
    passenger: '5',
    vehicleClass: 'awesome',
    favorite: false
  }

  it('Should have a favorite button', () => {
    const wrapper = shallow(
      <VehicleCard />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it("Should have a title and three p tags", () => {
    const wrapper = shallow(
      <VehicleCard />
    );

    expect(wrapper.find('p').length).toEqual(3);
    expect(wrapper.find('h3').length).toEqual(1);
  });

  it('Should take in vehicle props', () => {
    const wrapper = mount(
      <VehicleCard fakeCar={fakeCar}/>
    );

    expect(wrapper.props().fakeCar).toEqual({
      name: 'honda',
      model: 'cr-v',
      passenger: '5',
      vehicleClass: 'awesome',
      favorite: false
    });
  });

  it('renders correctly', () => {

    const rendered = renderer.create(
      <VehicleCard fakeCar={fakeCar} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});
//render the component, and assert that it matches the snapshot



});

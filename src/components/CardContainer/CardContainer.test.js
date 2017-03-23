import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';
import renderer           from 'react-test-renderer';

import CardContainer      from './CardContainer';

describe('CardContainer', () => {

  it('Renders CardContainer div', () => {
    const wrapper = shallow(
      <CardContainer />
    );

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Renders CardContainer div', () => {
    const wrapper = shallow(
      <CardContainer />
    );

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<CardContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});


});

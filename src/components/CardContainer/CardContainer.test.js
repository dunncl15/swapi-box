import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import CardContainer      from './CardContainer';

describe('CardContainer', () => {

  it('Renders CardContainer div', () => {
    const wrapper = shallow(
      <CardContainer />
    );

    expect(wrapper.find('div').length).toEqual(1);
  });



});

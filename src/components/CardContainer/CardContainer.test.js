import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import CardContainer      from './CardContainer';

describe('CardContainer', () => {

  it('should have a favorite button on the page', () => {
    const wrapper = shallow(
      <CardContainer />
    );

    expect(wrapper.find('button').length).toEqual(1);
  })

  
});

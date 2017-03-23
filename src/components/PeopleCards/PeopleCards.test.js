import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import PeopleCard         from './PeopleCards';

describe('PeopleCard', () => {

  it('Should have a favorite button', () => {
    const wrapper = shallow(
      <PeopleCard />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it("Should have a title and three p tags", () => {
    const wrapper = shallow(
      <PeopleCard />
    );

    expect(wrapper.find('p').length).toEqual(4);
    expect(wrapper.find('h3').length).toEqual(1);
  });

})

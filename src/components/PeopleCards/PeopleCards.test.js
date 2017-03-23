import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';
import sinon              from 'sinon';
import renderer           from 'react-test-renderer';

import PeopleCard         from './PeopleCards';

describe('PeopleCard', () => {
  const fakePerson = {
    name: 'bob',
    homeworld: 'earth',
    species: 'human',
    population: 10
  }

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

  it('Should have a favorite button', () => {
    const wrapper = shallow(
      <PeopleCard />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

});

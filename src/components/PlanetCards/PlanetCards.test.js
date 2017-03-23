import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';
import sinon              from 'sinon';

import PlanetCard         from './PlanetCards';

describe('PlanetCard', () => {

  const planet = {
    name: 'earth',
    population: 100,
    language: 'english'
  }

  it('Should have a favorite button', () => {
    const wrapper = shallow(
      <PlanetCard />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it("Should have a title and three p tags", () => {
    const wrapper = shallow(
      <PlanetCard />
    );

    expect(wrapper.find('p').length).toEqual(4);
    expect(wrapper.find('h3').length).toEqual(1);
  });

});

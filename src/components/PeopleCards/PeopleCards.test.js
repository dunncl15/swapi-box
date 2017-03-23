import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import PeopleCard         from './PeopleCards';
import renderer           from 'react-test-renderer';

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

  it('should make favorite if button clicked', () => {
      const wrapper = shallow(
          <PeopleCard />
      );

      expect(wrapper).toMatchSnapshot();

      wrapper.find('.favorite').simulate('click');

      expect(wrapper).toMatchSnapshot();
  });

//   it('renders a favorite button', () => {
//     const mockedClick = jest.fn();
//
//     const wrapper = mount(
//       <PeopleCard
//         fakePerson={fakePerson}
//         fetchData={mockedClick} />
//     );
//
//     expect(wrapper.find('.favorite')).to.have.length(1);
// });



})

import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import Buttons            from './Buttons';

describe('Buttons', () => {

  it('Should have three buttons', () => {
    const wrapper = shallow(
      <Buttons />
    );

    expect(wrapper.find('button').length).toEqual(4);
  });


  it('Film should have props', () => {
    const obj = {
      name: "Charlie",
      age: 10
    };

    const wrapper = mount(
      <Buttons film={obj} />
    );

    expect(wrapper.props().film).toEqual({
      name: "Charlie",
      age: 10
    });
  });

  it('Should be able to click button', () => {
    const mockedClick = jest.fn();

    const filmObj = {
      opening_crawl: 'hello',
      title: 'star wars',
      release_date: 10
    }

    const wrapper = mount(
      <Buttons film={filmObj} fetchData={mockedClick} />
    );

    const button1 = wrapper.find('.cat-btn').first();
    button1.simulate('click');

    expect(mockedClick.mock.calls.length).toBe(1);
  });

});

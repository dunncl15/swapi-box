import React              from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM           from 'react-dom';

import Film            from './Film';

describe('Film', () => {
  const film = {
    opening_crawl: 'hello',
    title: 'star wars',
    release_date: 'March 10'
  }

  it('Should have class of crawl with 3 p tags', () => {
    const wrapper = shallow(
      <Film film={film}/>
    );

    expect(wrapper.find('.crawl').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(3);
  });

  it('Film should have props', () => {
    const wrapper = mount(
      <Film film={film}/>
    );

    expect(wrapper.props().film).toEqual({
      opening_crawl: 'hello',
      title: 'star wars',
      release_date: 'March 10'
    });
  });

  it('Should have text for each p tag', () => {
    const wrapper = shallow(
      <Film film={film}/>
    );


    expect(wrapper.find('.opening').text()).toEqual('hello')
    expect(wrapper.find('.title').text()).toEqual('star wars')
    expect(wrapper.find('.date').text()).toEqual('March 10')
  });

});

import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import { mount, shallow } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Renders film', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.find('Film').length).toEqual(1);
  });

  it('Renders Buttons', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.find('Buttons').length).toEqual(1);
  });

});

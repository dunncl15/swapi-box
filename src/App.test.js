import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import { mount, shallow } from 'enzyme';
import sinon              from 'sinon';


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

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
    App.prototype.componentDidMount.restore();
});

});

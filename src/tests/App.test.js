import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../App';

describe('App', () => {
	it('always renders a div', () => {
		const wrapper = mount(<App />);
		expect(wrapper.find('div').length).toBeGreaterThan(0);
	});
})

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});*/
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  // renderer.create(<App />);
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

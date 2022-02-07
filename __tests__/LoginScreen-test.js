import 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LoginScreen } from '../src/screens/LoginScreen';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from "react-redux";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe("MyComponent", () => {
    beforeAll(() => {
        useSelector.mockImplementation(() => ({
            name: 'Divya',
        }));
    });
    it('should render a placeholder', () => {
        const placeholder_text = 'Enter name';
        const wrapper = shallow(<LoginScreen placeholder={placeholder_text} />);
        expect(wrapper.prop('placeholder')).toEqual(placeholder_text);
    });
    it('renders correctly', () => {
        const wrapper = shallow(<LoginScreen />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to match snapshot for native version', () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Button  test', () => {
        const component = shallow(<LoginScreen />);
        const refreshTrigger = component.find(Button).at(0);
        refreshTrigger.props('onPress')();
        expect(component).toMatchSnapshot();
    });
});
import React from "react"
import Enzyme, {shallow, mount} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import Calculator from "./Calculator"
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

describe('Calculator', () => {
    it('should render corectly', () => {
        const tree = renderer
            .create(<Calculator />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('input celsius check fahrenheit temperature', () => {
        const wrapper = mount(<Calculator />);
        const input = wrapper.find('TemperatureInput[scale="c"] input');
        input.simulate('change',{target:{
            value: 10
        }});
        expect(wrapper.find('TemperatureInput[scale="f"]').prop("temperature")).toEqual("50");
    });
    it('input fahrenheit check celsius temperature', () => {
        const wrapper = mount(<Calculator />);
        const input = wrapper.find('TemperatureInput[scale="f"] input');
        input.simulate('change',{target:{
            value: 212
        }});
        expect(wrapper.find('TemperatureInput[scale="c"]').prop("temperature")).toEqual("100");
    });
});
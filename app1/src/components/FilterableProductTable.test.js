import React from "react"
import Enzyme, {shallow, mount} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import FilterableProductTable from "./FilterableProductTable"
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

describe('FilterableProductTable', () => {
    var products = [
        {
            category: 'Sporting Goods',
            price: '$49.99',
            stocked: true,
            name: 'Football'
        }, {
            category: 'Sporting Goods',
            price: '$9.99',
            stocked: true,
            name: 'Baseball'
        }, {
            category: 'Sporting Goods',
            price: '$29.99',
            stocked: false,
            name: 'Basketball'
        }, {
            category: 'Electronics',
            price: '$99.99',
            stocked: true,
            name: 'iPod Touch'
        }, {
            category: 'Electronics',
            price: '$399.99',
            stocked: false,
            name: 'iPhone 5'
        }
    ];
    it('should render corectly', () => {
        const tree = renderer
            .create(<FilterableProductTable products={products}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('simulates input in search bar to check filterText state', () => {
        const wrapper = mount(<FilterableProductTable products={products}/>);
        const input = wrapper.find('input[type="text"]');
        input.simulate('change',{target:{
            value: "Foot"
        }});
        expect(wrapper.state("filterText")).toEqual("Foot");
    });
    it('simulates click in search bar to check inStockOnly state', () => {
        const wrapper = mount(<FilterableProductTable products={products}/>);
        const checkBox = wrapper.find('input[type="checkbox"]');
        checkBox.simulate("click");
        expect(wrapper.state("inStockOnly")).toEqual(true);
    });
});
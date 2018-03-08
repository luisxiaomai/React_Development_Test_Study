import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import FilterableProductTable from "./FilterableProductTable"

Enzyme.configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
    it('should render FilterableProductTable', () => {
        const wrapper = shallow(<FilterableProductTable/>);
    });
}); 
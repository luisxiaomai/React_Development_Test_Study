import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Counter from './Counter'

Enzyme.configure({ adapter: new Adapter() });

function setup(value=0){
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn()
    };
    const component = shallow(
        <Counter value={value} {...actions}/>
    )
    return {
        component: component,
        actions: actions,
        buttons: component.find('button'),
        p: component.find('p')
    }
}

describe('Counter component', () => {
    it('first button should call increment', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.increment).toBeCalled();
    });
    it('second button should call decrement', () => {
        const { buttons, actions } = setup()
        buttons.at(1).simulate('click')
        expect(actions.decrement).toBeCalled()
      })
});
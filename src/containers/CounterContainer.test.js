import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CounterContainer from './CounterContainer'
import Counter from '../components/Counter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('Connected Components', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            counter: 0
        });
    });
    it('should render the container component', () => {
        const wrapper = mount(<Provider store={store}>
            <CounterContainer />
          </Provider>);
        expect(wrapper.find(CounterContainer)).toHaveLength(1);
        const container = wrapper.find(CounterContainer);
        expect(container.find(Counter).length).toEqual(1);
        expect(container.find(Counter).props().counter).toEqual(0);
        expect(container.find(Counter).props().decrement).toBeDefined();
        expect(container.find(Counter).props().increment).toBeDefined();
    });
    it('should dispatch increment when click + button...', () => {
        const wrapper = mount(<Provider store={store}>
            <CounterContainer />
          </Provider>);
        const container = wrapper.find(CounterContainer);
        container.find("button").at(0).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'INCREMENT' }]);
    });
    it('should dispatch decrement when click - button', () => {
        const wrapper = mount(<Provider store={store}>
            <CounterContainer />
          </Provider>);
        const container = wrapper.find(CounterContainer);
        container.find("button").at(1).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'DECREMENT' }]);
    });

    
});
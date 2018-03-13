import * as actions from './counter'

describe('actions', () => {
    it('should create increment action', () => {
        expect(actions.increment().type).toEqual("INCREMENT");
    });
    it('should create decrement action', () => {
        expect(actions.decrement().type).toEqual("DECREMENT");
    });
});
import reducer from './index'

describe('reducers', () => {
    describe('counter', () => {
        it('should provide the initial state', () => {
            expect(reducer(undefined,{})).toBe(0);
        });
        it('should handle INCREMENT action', () => {
            expect(reducer(1,{type:'INCREMENT'})).toBe(2);
        });
        it('should handle DECREMENT action', () => {
            expect(reducer(1,{type:'DECREMENT'})).toBe(0);
        });
    });
});
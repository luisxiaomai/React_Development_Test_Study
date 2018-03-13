import reducer from './index'

describe('reducers', () => {
    describe('counter', () => {
        it('should provide the initial state', () => {
            expect(reducer(undefined,{}).counter).toBe(0);
        });
        it('should handle INCREMENT action', () => {
            expect(reducer({counter:1},{type:'INCREMENT'}).counter).toBe(2);
        });
        it('should handle DECREMENT action', () => {
            expect(reducer({counter:1},{type:'DECREMENT'}).counter).toBe(0);
        });
    });
});
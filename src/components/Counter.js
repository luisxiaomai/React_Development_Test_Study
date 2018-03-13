import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {counter, increment, decrement} = this.props; //destructuring
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>
                    +
                </button>
                <button onClick={decrement}>
                    -
                </button>               
            </p>
        )
    }
}

Counter.prototypes = {
    counter:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired
}

export default Counter;
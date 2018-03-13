import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {increment,decrement} from '../actions/counter'

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        increment:(...args) => dispatch(increment(...args)),
        decrement:(...args) => dispatch(decrement(...args))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
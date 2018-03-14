import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        increment:(...args) => dispatch(actions.increment(...args)),
        decrement:(...args) => dispatch(actions.decrement(...args))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
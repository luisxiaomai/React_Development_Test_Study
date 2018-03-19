import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/*
const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
*/
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault()
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.input.value))
    this.input.value = ''
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => this.input = node} />
          <button type="submit">
            Add Todo
        </button>
        </form>
      </div>)
  }
}

export default connect()(AddTodo)
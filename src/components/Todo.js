import React from 'react'
import PropTypes from 'prop-types'
import { relative, isAbsolute } from 'path';

const Todo = ({ onClick, onDelete,completed, text }) => (
  <div style={{ position: "relative" }}>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <span onClick={onDelete} style={{ position: "absolute", right: 0, top: 0, color: "red" }}>&#10006;</span>
  </div>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
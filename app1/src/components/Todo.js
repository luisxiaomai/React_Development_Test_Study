
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
    </li>
)

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
}

export default Todo;


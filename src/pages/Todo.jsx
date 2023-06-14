import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <div>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
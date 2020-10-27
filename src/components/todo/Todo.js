import React from 'react';
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className='todo'
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div contentEditable='true'>{todo.text}</div>
      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;

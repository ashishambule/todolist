import React from 'react';
import '../displyatodo/Displaytodo.css';
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      Add new task to do
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Type your task here...'
          type='text'
          className='input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span>
          <button className='addbutton' type='submit'>
            +
          </button>
        </span>
      </form>
    </div>
  );
}

export default TodoForm;

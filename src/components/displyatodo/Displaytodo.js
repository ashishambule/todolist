import React from 'react';
import './Displaytodo.css';
import Todo from '../todo/Todo';
import TodoForm from '../addtodo/TodoForm';

function Displaytodo() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Have to complete test',
      isCompleted: false,
    },
    {
      text: 'Has some priority task assigned',
      isCompleted: false,
    },
    {
      text: 'Need to bring grocerry',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='display'>
      To Do App
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Displaytodo;

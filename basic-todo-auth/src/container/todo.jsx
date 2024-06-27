import React from 'react';
import TodoList from '../components/TodoList/todoList';
import Input from '../components/Input';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const handleAddTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', index: id });
  };

  const handleUpdateTodo = (id) => {
    const newText = prompt('Enter new todo text:');
    if (newText !== null) {
      dispatch({ type: 'UPDATE_TODO', index: id, text: newText });
    }
  };

  return (
    <div>
      <Input onSubmit={handleAddTodo} />
      <TodoList
        todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
  );
};

export default Todo;

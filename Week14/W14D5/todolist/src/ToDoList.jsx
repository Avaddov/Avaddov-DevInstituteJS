import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const todo = { id: Date.now(), text: newTodo, completed: false };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

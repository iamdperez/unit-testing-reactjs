import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="todo-form">
      <input
        type="text"
        className="input"
        data-testid="input-form"
        value={value}
        placeholder="Add new todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;

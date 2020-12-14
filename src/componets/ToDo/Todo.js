import React from 'react';
import './Todo.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
      }}
      data-testid="todo"
    >
      {todo.text}
      <div>
        <button
          onClick={() => completeTodo(index)}
          data-testid="complete-button"
        >
          Complete
        </button>
        <button onClick={() => removeTodo(index)} data-testid="remove-todo">
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;

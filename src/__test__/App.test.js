import { act, render, screen } from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
  it('app should be in the document', () => {
    act(() => {
      render(<App />);
    });
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });

  it('todo-list should be in the document', () => {
    act(() => {
      render(<App />);
    });
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
  });
});

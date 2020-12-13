import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TodoForm from '../componets/ToDoForm/TodoForm';

const mockAddTodo = jest.fn();
describe('<Todo Form />', () => {
  beforeEach(() => {
    render(<TodoForm addTodo={mockAddTodo} />);
  });

  afterEach(cleanup);

  it('Input should be in the document', () => {
    const input = screen.getByTestId('input-form');
    expect(input).toBeInTheDocument();
  });

  it('when type something in the input the value should be the same', () => {
    const input = screen.getByTestId('input-form');
    const expectedValue = 'hola';
    fireEvent.change(input, { target: { value: 'hola' } });
    expect(input).toHaveValue(expectedValue);
  });

  it('should add new todo to the list', () => {
    const form = screen.getByTestId('input-form');
    expect(form).toBeInTheDocument();

    const input = screen.getByTestId('input-form');
    fireEvent.change(input, { target: { value: 'hola mundo' } });

    fireEvent.submit(form);
    expect(mockAddTodo).toBeCalled();
    expect(mockAddTodo).toBeCalledWith('hola mundo');
  });
});

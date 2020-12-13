import { cleanup, render, screen } from '@testing-library/react';
import Todo from '../componets/ToDo/Todo';

const todo = {
  text: 'Obtencion de datos',
  isCompleted: false,
};

describe('<Todo />', () => {
  beforeEach(() => {
    render(<Todo index={0} todo={todo} />);
  });

  afterEach(cleanup);

  it('It should have the same text', () => {
    const text = screen.getByText(/Obtencion de datos/);
    expect(text).toBeInTheDocument();
  });

  it('should have a complete button', () => {
    const completeButton = screen.getByText(/Complete/);
    expect(completeButton).toBeInTheDocument();
  });
});

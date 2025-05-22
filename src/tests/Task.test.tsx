import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';

import Task from '../App/TodoList/Task';
import { useTodoStore } from '../store';

jest.mock('../store', () => ({
  useTodoStore: jest.fn(),
}));

describe('Task component', () => {
  it('Test of render text of Task', () => {
    (useTodoStore as unknown as jest.Mock).mockReturnValue({ toggleTodo: jest.fn() });

    render(<Task id='1' text='Test Task' completed={false} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('Test of correct Task styles', () => {
    (useTodoStore as unknown as jest.Mock).mockReturnValue({ toggleTodo: jest.fn() });

    render(<Task id='1' text='Completed Task' completed={true} />);

    const textElement = screen.getByText('Completed Task');
    expect(textElement).toHaveStyle('text-decoration: line-through');
    expect(textElement).toHaveStyle('opacity: 0.5');
  });

  it('Test of call toggleTodo on checkbox click', () => {
    const toggleTodoMock = jest.fn();

    (useTodoStore as unknown as jest.Mock).mockImplementation((selector) => selector({ toggleTodo: toggleTodoMock }));

    render(<Task id='1' text='Test Task' completed={false} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleTodoMock).toHaveBeenCalledWith('1');
  });
});

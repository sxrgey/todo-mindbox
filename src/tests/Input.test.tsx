import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../App/TodoList/Input';
import { useTodoStore } from '../store';

jest.mock('../store');

describe('Input component', () => {
  const addTodoMock = jest.fn();
  const onToggleClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useTodoStore as unknown as jest.Mock).mockImplementation((selector) => selector({ addTodo: addTodoMock }));
  });

  it('Test of call addTodo with input text when Enter is pressed', async () => {
    render(<Input onToggleClick={() => {}} show={false} />);

    const input = screen.getByPlaceholderText('What needs to be done?');

    await userEvent.type(input, 'New task{enter}');

    expect(addTodoMock).toHaveBeenCalledWith('New task');
  });

  it('Test of not call addTodo if text is empty', () => {
    render(<Input onToggleClick={onToggleClickMock} show={false} />);
    const input = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});

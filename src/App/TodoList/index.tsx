import { useState } from 'react';

import { useTodoStore } from '../../store';
import Footer from './Footer';
import Input from './Input';
import Container from './styles/Container';
import Label from './styles/Label';
import Paper from './styles/Paper';
import Task from './Task';

const TodoList = () => {
  const { todos, filter } = useTodoStore((state) => state);
  const [showTodos, setShowTodos] = useState(true);

  const onToggleClick = () => setShowTodos((prev) => !prev);

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <Container>
      <Label variant='h1'>todos</Label>
      <Paper>
        <Input onToggleClick={onToggleClick} show={showTodos} />
        {showTodos && (
          <>
            {filteredTodos.map((todo) => (
              <Task key={todo.id} {...todo} />
            ))}
            <Footer />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default TodoList;

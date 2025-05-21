import { Container, Paper, Typography } from '@mui/material';
import { useTodoStore } from '../../store';
import Footer from './Footer';
import Input from './Input';
import Task from './Task';

const TodoItem = () => {
  const { todos, filter } = useTodoStore((state) => state);

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <Container maxWidth='sm' sx={{ mt: 10 }}>
      <Typography variant='h1' textAlign='center' sx={{ opacity: 0.1, fontSize: '6rem' }}>
        todos
      </Typography>
      <Paper elevation={3}>
        <Input />
        {filteredTodos.map((todo) => (
          <Task key={todo.id} {...todo} />
        ))}
        <Footer />
      </Paper>
    </Container>
  );
};

export default TodoItem;

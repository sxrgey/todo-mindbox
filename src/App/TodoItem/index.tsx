import { Box, Container, Paper, Typography } from '@mui/material';
import { useTodoStore } from '../../store';
import Footer from './Footer';
import Input from './Input';
import Task from './Task';
import { FC } from 'react';

type Props = {
  id: string;
};

const TodoItem: FC<Props> = ({ id }) => {
  const { activeId, filter } = useTodoStore((state) => state);
  const todo = useTodoStore((state) => state.todos.find((todo) => todo.id === id));

  const name = todo?.name ?? '';

  const filteredTasks =
    todo?.tasks.filter((t) => {
      if (filter === 'active') return !t.completed;
      if (filter === 'completed') return t.completed;
      return true;
    }) ?? [];

  return (
    <Container maxWidth='sm' sx={{ mt: 10 }}>
      <Typography variant='h1' textAlign='center' sx={{ opacity: 0.1, fontSize: '6rem', height: '20%' }}>
        {name}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            boxShadow: 'inherit',
            backgroundColor: 'inherit',
            transition: 'all 0.3s ease',
          },
          '&::before': {
            top: '6px',
            transform: 'scale(0.99)',
            zIndex: -1,
          },
          '&::after': {
            top: '12px',
            transform: 'scale(0.98)',
            zIndex: -2,
          },
        }}
      >
        <Input />
        <Box sx={{ maxHeight: '280px', overflow: 'auto' }}>
          {filteredTasks.map((todo) => (
            <Task key={todo.id} {...todo} />
          ))}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default TodoItem;

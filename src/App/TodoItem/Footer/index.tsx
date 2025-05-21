import { Box, Button, Typography, Stack } from '@mui/material';
import { useTodoStore } from '../../../store';

const Footer = () => {
  const { filter, setFilter, clearCompleted, activeId } = useTodoStore((state) => state);

  const tasks = useTodoStore((state) => state.todos.find((todo) => todo.id === activeId))?.tasks || [];

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' p={1}>
      <Typography>{remaining} items left</Typography>
      <Stack direction='row' spacing={1}>
        {(['all', 'active', 'completed'] as const).map((f) => (
          <Button key={f} variant={filter === f ? 'outlined' : 'text'} onClick={() => setFilter(f)}>
            {f[0].toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </Stack>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </Box>
  );
};

export default Footer;

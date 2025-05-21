import { Checkbox, Typography, Box } from '@mui/material';
import { useTodoStore } from '../../../store';

const Task = ({ id, text, completed }: { id: string; text: string; completed: boolean }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <Box display='flex' alignItems='center' p={1} borderBottom='1px solid #eee'>
      <Checkbox checked={completed} onChange={() => toggleTodo(id)} sx={{ '&.Mui-checked': { color: '#4CAF50' } }} />
      <Typography
        variant='h6'
        sx={{
          textDecoration: completed ? 'line-through' : 'none',
          opacity: completed ? 0.5 : 1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Task;

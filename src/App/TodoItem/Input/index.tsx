import { TextField } from '@mui/material';
import { useState } from 'react';
import { useTodoStore } from '../../../store';

const Input = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTask);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <TextField
      fullWidth
      placeholder='What needs to be done?'
      variant='standard'
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;

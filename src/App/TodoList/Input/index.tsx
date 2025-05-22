import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

import { useTodoStore } from '../../../store';
import IconButton from './styles/IconButton';
import TextField from './styles/TextField';

type Props = {
  onToggleClick: () => void;
  show: boolean;
};

const Input = ({ onToggleClick, show }: Props) => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

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
      InputProps={{
        startAdornment: <IconButton onClick={onToggleClick}>{show ? <ArrowDown /> : <ArrowUp />}</IconButton>,
      }}
    />
  );
};

export default Input;

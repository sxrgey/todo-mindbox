import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';

import { Todo } from '@/common/types/todo';

import { useTodoStore } from '../../../store';
import Checkbox from './styles/Checkbox';
import Container from './styles/Container';
import Text from './styles/Text';

const Task: FC<Todo> = ({ id, text, completed }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <Container>
      <Checkbox checked={completed} onChange={() => toggleTodo(id)} checkedIcon={<CheckIcon />} />
      <Text completed={completed}>{text}</Text>
    </Container>
  );
};

export default Task;

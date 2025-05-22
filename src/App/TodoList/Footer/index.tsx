import { Filter } from '@/common/types/filter';

import { useTodoStore } from '../../../store';
import Button from './styles/Button';
import Container from './styles/Containter';
import Text from './styles/Text';
import Wrapper from './styles/Wrapper';

const Footer = () => {
  const { todos, filter: activeFilter, setFilter, clearCompleted } = useTodoStore((state) => state);

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <Container>
      <Text>{remaining} items left</Text>
      <Wrapper>
        {(['all', 'active', 'completed'] as Filter[]).map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'outlined' : 'text'}
            onClick={() => setFilter(filter)}
          >
            {filter[0].toUpperCase() + filter.slice(1)}
          </Button>
        ))}
      </Wrapper>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </Container>
  );
};

export default Footer;

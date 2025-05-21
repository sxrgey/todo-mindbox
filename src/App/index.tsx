import { FC } from 'react';
import Root from './styles/Root';
import TodoItem from './TodoItem';

const App: FC = () => {
  return (
    <Root>
      <TodoItem />
    </Root>
  );
};

export default App;

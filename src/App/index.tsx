import { Box, Button, Tabs, Tab } from '@mui/material';
import { useTodoStore } from '../store';
import TodoItem from './TodoItem';
import Root from './styles/Root';

export default function TodoStack() {
  const { todos, activeId, setActiveTodo, addTodo } = useTodoStore();

  const activeIndex = todos.findIndex((t) => t.id === activeId);

  const handleChangeTab = (_: React.SyntheticEvent, newIndex: number) => {
    const newTodo = todos[newIndex];
    if (newTodo) {
      setActiveTodo(newTodo.id);
    }
  };

  const handleAddTodo = () => {
    const newId = addTodo(`TODO ${todos.length + 1}`);
    setActiveTodo(newId);
  };

  return (
    <Root>
      <Tabs
        value={activeIndex}
        onChange={handleChangeTab}
        variant='scrollable'
        scrollButtons='auto'
        sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}
      >
        {todos.map((todo, index) => (
          <Tab key={todo.id} label={todo.name || `TODO ${index + 1}`} />
        ))}
      </Tabs>

      <Box mt={2}>{activeId && <TodoItem id={activeId} />}</Box>

      <Button variant='contained' onClick={handleAddTodo} sx={{ mt: 4 }}>
        + Добавить тудушку
      </Button>
    </Root>
  );
}

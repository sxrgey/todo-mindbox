import { create } from 'zustand';
import { v4 } from 'uuid';

const DEFAULT_TODO: Todo = {
  id: 'default',
  name: 'Todos',
  tasks: [],
};

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export type Todo = {
  id: string;
  name: string;
  tasks: Task[];
};

type Filter = 'all' | 'active' | 'completed';

type TodoStore = {
  activeId: string;
  todos: Todo[];
  filter: Filter;

  setActiveTodo: (id: string) => void;
  addTodo: (name: string) => string;
  addTask: (text: string) => void;
  toggleTask: (taskId: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  activeId: 'default',
  todos: [DEFAULT_TODO],
  filter: 'all',

  setActiveTodo: (id: string) => set({ activeId: id }),

  addTodo: (name: string) => {
    const newTodo: Todo = {
      id: v4(),
      name,
      tasks: [],
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
      activeId: newTodo.id,
    }));

    return newTodo.id;
  },

  addTask: (text: string) => {
    const { activeId, todos } = get();
    if (!activeId) return;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === activeId) {
        const newTask: Task = {
          id: v4(),
          text,
          completed: false,
        };
        return {
          ...todo,
          tasks: [...todo.tasks, newTask],
        };
      }
      return todo;
    });

    set({ todos: updatedTodos });
  },

  toggleTask: (taskId: string) => {
    const { activeId, todos } = get();
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== activeId) return todo;

      return {
        ...todo,
        tasks: todo.tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
      };
    });

    set({ todos: updatedTodos });
  },

  clearCompleted: () => {
    const { activeId, todos } = get();
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== activeId) return todo;

      return {
        ...todo,
        tasks: todo.tasks.filter((task) => !task.completed),
      };
    });

    set({ todos: updatedTodos });
  },

  setFilter: (filter: Filter) => set({ filter }),
}));

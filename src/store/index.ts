import { v4 } from 'uuid';
import { create } from 'zustand';

import { Filter } from '@/common/types/filter';
import { Todo } from '@/common/types/todo';

export type TodoStore = {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  filter: 'all',
  addTodo: (text: string) =>
    set((state: TodoStore) => ({
      todos: [...state.todos, { id: v4(), text, completed: false }],
    })),
  toggleTodo: (id: string) =>
    set((state: TodoStore) => ({
      todos: state.todos.map((todo: Todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
  clearCompleted: () =>
    set((state: TodoStore) => ({
      todos: state.todos.filter((todo: Todo) => !todo.completed),
    })),
  setFilter: (filter: Filter) => set({ filter }),
}));

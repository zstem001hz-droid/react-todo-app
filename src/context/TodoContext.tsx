import { createContext, useContext, useState, useEffect } from "react";

// Represents a single todo item
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Shape of the TodoContext value
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
}

// Creates TodoContext with empty default stubs
const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  clearCompleted: () => {},
})

export function useTodos() {
  return useContext(TodoContext)
}

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
});

// Custom hook for consuming TodoContext
export function useTodos() {
  return useContext(TodoContext);
}

// Manages todo list state and persists it to localStorage.
// Exposes all todo actions to the component tree via context.
export function TodoProvider({ children }: { children: React.ReactNode }) {
  // Lazy initialization reads persisted todos from localStorage on first render
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Persists todos to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adds a new todo with a unique id and completed set to false
  function addTodo(text: string) {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  }

  // Toggles the completed status of a todo by id
  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  // Removes a todo from the list by id
  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // Updates the text of an existing todo by id
  function editTodo(id: string, newText: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }

  // Removes all todos marked as completed
  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

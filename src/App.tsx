import "./App.css";
import { TodoProvider, useTodos } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

// Inner component has access to both TodoContext and FilterContext
function TodoApp() {
  const { addTodo } = useTodos();
  const { theme } = useTheme();

  return (
    // Inline style applies theme background and text color to entire app
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#222",
        padding: "20px",
      }}
    >
      <h1>React: To Do List</h1>
      <ThemeToggleButton />
      <TodoInput onAdd={addTodo} />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

// All three providers wrap the app making all context values available tree-wide
function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <TodoApp />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;

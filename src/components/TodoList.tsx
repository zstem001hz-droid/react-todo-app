import { TodoProvider, useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import TodoItem from "./TodoItem";

// Renders todo items filtered by the current active filter value.
// Displays a message when no todos match the current filter.
function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  // Filters the todo array based on the current active filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p>Nothing to do that matches the current filter.</p>
  }

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;

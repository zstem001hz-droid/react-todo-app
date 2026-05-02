import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

// Renders the full list of todo items.
// Displays a message when no todos exist.
function TodoList() {
  const { todos } = useTodos()

  if (todos.length === 0) {
    return <p>Nothing to do yet — add something to do above!</p>
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}

export default TodoList
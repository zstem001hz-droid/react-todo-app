import { useTodos } from '../context/TodoContext'

// Renders a button that removes all completed todos from the list.
// Only displays when at least one completed todo exists.
function ClearCompleted() {
  const { todos, clearCompleted } = useTodos()

  // Derived value — counts completed todos to control button visibility
  const completedCount = todos.filter(todo => todo.completed).length

  if (completedCount === 0) return null

  return (
    <button onClick={clearCompleted}>
      Clear Completed ({completedCount})
    </button>
  )
}

export default ClearCompleted
import './App.css'
import { TodoProvider, useTodos } from './context/TodoContext'
import TodoInput from './components/TodoInput'

// Inner component has access to TodoContext via TodoProvider wrapper
function TodoApp() {
  const { addTodo } = useTodos()

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoInput onAdd={addTodo} />
    </div>
  )
}

// TodoProvider wraps the app making todo state available tree-wide
function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  )
}

export default App
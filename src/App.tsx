import './App.css'
import { TodoProvider, useTodos } from './context/TodoContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

// Inner component has access to TodoContext via TodoProvider wrapper
function TodoApp() {
  const { addTodo } = useTodos()

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList />
    </div>
  )
}

// TodoProvider wraps the entire app making todo state available tree-wide
function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  )
}

export default App
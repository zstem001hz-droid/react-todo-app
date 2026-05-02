import './App.css'
import { TodoProvider, useTodos } from './context/TodoContext'
import { FilterProvider } from './context/FilterContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'

// Inner component has access to both TodoContext and FilterContext
function TodoApp() {
  const { addTodo } = useTodos()

  return (
    <div>
      <h1>React: To Do List</h1>
      <TodoInput onAdd={addTodo} />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

// Providers wrap the app making all context values available tree-wide
function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <TodoApp />
      </FilterProvider>
    </TodoProvider>
  )
}

export default App
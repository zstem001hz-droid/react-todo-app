import './App.css'
import TodoInput from './components/TodoInput'

function App() {

  // Handles new todo submission — delegates to ToDoContext
  function handleAdd(text: string) {
    console.log('Todo added:', text)
  }

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoInput onAdd={handleAdd} />
    </div>
  )
}

export default App
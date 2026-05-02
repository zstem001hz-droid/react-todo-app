import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

// Renders a single todo item with toggle, edit, and delete controls.
// Manages its own local edit state independently of global todo state.
function TodoItem({ id, text, completed }: { id: string; text: string; completed: boolean }) {

  // Tracks whether this todo is currently in edit mode
  const [isEditing, setIsEditing] = useState(false)

  // Tracks the current value of the edit input field
  const [editText, setEditText] = useState(text)

  const { toggleTodo, deleteTodo, editTodo } = useTodos()

  // Saves the edited text and exits edit mode
  function handleSave() {
    if (editText.trim() === '') return
    editTodo(id, editText.trim())
    setIsEditing(false)
  }

  return (
    <li>
      {isEditing ? (
        <>
          {/* Edit mode — shows input with save and cancel controls */}
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {/* Display mode — shows todo text with action controls */}
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TodoItem
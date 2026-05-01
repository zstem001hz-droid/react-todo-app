import { useState } from 'react'

// Controlled input component for adding new todo items.
// Calls onAdd callback with trimmed text and clears the input on submission.
function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {

  // Tracks the current input field value
  const [text, setText] = useState('')

  // Prevents empty submissions and clears input after adding
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled input bound to text state */}
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput
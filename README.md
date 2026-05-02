# React Todo App — Lab 3

## Description
A full-featured Todo application built with React and TypeScript, demonstrating the Context API for global state management across multiple contexts including todo management, visibility filtering, and theme switching.

## Features
- ✅ `TodoContext` — add, toggle, delete, edit, and clear todos
- ✅ `FilterContext` — filter todos by all, active, or completed
- ✅ `ThemeContext` — toggle between light and dark theme
- ✅ `TodoInput` — controlled input for adding new todos
- ✅ `TodoList` — filtered list of todos
- ✅ `TodoItem` — individual todo with toggle, edit, and delete
- ✅ `FilterButtons` — UI controls for visibility filter
- ✅ `ThemeToggleButton` — toggles light/dark theme
- ✅ `clearCompleted` — removes all completed todos
- ✅ Persistence — todos and theme saved to localStorage

## Tech Stack
- React 19
- TypeScript
- Vite

## Project Structure

```
src/
├── context/
│   ├── TodoContext.tsx          ← todo state and actions
│   ├── FilterContext.tsx        ← visibility filter state
│   └── ThemeContext.tsx         ← theme state and toggle
├── components/
    ├── ClearCompleted
│   ├── TodoInput.tsx            ← input for adding todos
│   ├── TodoList.tsx             ← renders filtered todo list
│   ├── TodoItem.tsx             ← single todo item
│   ├── FilterButtons.tsx        ← filter controls
│   └── ThemeToggleButton.tsx    ← theme toggle button
├── types/
│   └── index.ts                 ← TypeScript interfaces
├── App.css                      ← cleared, reserved for styles
├── App.tsx                      ← root component
├── index.css                    ← base reset and font styles
└── main.tsx                     ← React entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Deliverables
- All context implementations (TodoContext, FilterContext, ThemeContext)
- All component implementations consuming the correct contexts
- Persistence layer using localStorage for todos and theme
- GitHub repository link submitted via Canvas

## References

### React
- [createContext — React Docs](https://react.dev/reference/react/createContext)
- [useContext — React Docs](https://react.dev/reference/react/useContext)
- [useState — React Docs](https://react.dev/reference/react/useState)
- [useEffect — React Docs](https://react.dev/reference/react/useEffect)
- [Context — Passing Data Deeply](https://react.dev/learn/passing-data-deeply-with-context)
- [Conditional Rendering — React Docs](https://react.dev/learn/conditional-rendering)

### JavaScript
- [localStorage — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JSON.stringify — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Array.prototype.filter — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [crypto.randomUUID — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
- [export — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [import — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### TypeScript
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Git
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Tools
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Reflections

This lab demonstrated how the Context API solves prop drilling by making state available to any component in the tree without passing props through intermediate components.

The most important concept was understanding the three-part Context pattern: createContext, Provider, and useContext. Each context followed the same structure — create the context, wrap the app with the Provider, consume with a custom hook.

Managing three independent contexts (TodoContext, FilterContext, ThemeContext) showed how separating concerns into focused contexts prevents unnecessary re-renders. A change to the theme does not affect components only consuming TodoContext, and vice versa.

The persistence layer using localStorage with lazy initialization connected directly back to Lab 1 patterns — the same useEffect and useState techniques applied in a more complex, multi-context environment.

The most challenging aspect was understanding why TodoApp needed to be a separate inner component inside App — hooks can only be called inside the Provider they consume, so the consuming component must be a child of the Provider, not the same component rendering it.
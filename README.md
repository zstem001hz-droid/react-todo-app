# React Todo App — Lab 3

## Description
A full-featured Todo application built with React and TypeScript, demonstrating the Context API for global state management across multiple contexts including todo management, visibility filtering, and theme switching.

## Features
- [ ] `TodoContext` — add, toggle, delete, edit, and clear todos
- [ ] `FilterContext` — filter todos by all, active, or completed
- [ ] `ThemeContext` — toggle between light and dark theme
- [ ] `TodoInput` — controlled input for adding new todos
- [ ] `TodoList` — filtered list of todos
- [ ] `TodoItem` — individual todo with toggle, edit, and delete
- [ ] `FilterButtons` — UI controls for visibility filter
- [ ] `ThemeToggleButton` — toggles light/dark theme
- [ ] Persistence — todos and theme saved to localStorage

## Tech Stack
- React 19
- TypeScript
- Vite

## Project Structure

```src/
├── context/
│   ├── TodoContext.tsx          ← todo state and actions
│   ├── FilterContext.tsx        ← visibility filter state
│   └── ThemeContext.tsx         ← theme state and toggle
├── components/
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

## Reflections
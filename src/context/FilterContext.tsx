import { createContext, useContext, useState } from "react";

// Valid filter values — filter state must be one of these three options
type FilterType = "all" | "active" | "completed";

// Shape of the FilterContext value
interface FilterContextType {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

// Creates FilterContext with default values
const FilterContext = createContext<FilterContextType>({
  filter: "all",
  setFilter: () => {},
});

// Custom hook for consuming FilterContext
export function useFilter() {
  return useContext(FilterContext);
}

// Manages visibility filter state for the todo list.
// Provides filter value and setter to the component tree.
export function FilterProvider({ children }: { children: React.ReactNode }) {
  // Tracks the current active filter — defaults to showing all todos
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

import { useFilter } from "../context/FilterContext";

// Renders filter control buttons for all, active, and completed todos.
// Disables the button for the currently active filter.
function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div>
      {/* All button — shows every todo regardless of completion status */}
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>

      {/* Active button — shows only incomplete todos */}
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>

      {/* Completed button — shows only completed todos */}
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;

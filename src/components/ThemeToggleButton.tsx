import { useTheme } from "../context/ThemeContext";

// Renders a button that toggles between light and dark theme.
// Displays current theme state in the button label.
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {/* Label reflects the theme the button will switch TO */}
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggleButton;

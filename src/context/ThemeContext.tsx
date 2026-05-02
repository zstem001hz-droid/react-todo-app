import { createContext, useContext, useState, useEffect } from "react";

// Valid theme values
type ThemeType = "light" | "dark";

// Shape of the ThemeContext value
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Creates ThemeContext with light theme as default
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Custom hook for consuming ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}

// Manages theme state and persists it to localStorage.
// Wraps children with ThemeContext.Provider making theme available tree-wide.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Lazy initialization reads persisted theme from localStorage on first render
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  // Persists theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggles between light and dark theme values
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

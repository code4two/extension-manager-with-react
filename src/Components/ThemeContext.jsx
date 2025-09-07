import { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [changeTheme, setChangeTheme] = useState("dark"); // default changeTheme is dark

  const toggleTheme = () => {
    setChangeTheme(changeTheme === "dark" ? "light" : "dark");
    console.log("Theme toggled:", changeTheme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the theme easily
export function useTheme() {
  return useContext(ThemeContext);
}

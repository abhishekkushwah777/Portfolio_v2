// AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}
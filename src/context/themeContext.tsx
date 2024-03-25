/**
 * @description Theme context
 * @returns {JSX.Element} JSX.Element
 */

import { createContext, ReactNode, useState } from "react";

// Create a context
const ThemeContext = createContext({});

/**
 * @description Theme provider
 * @param {ReactNode} children
 * @returns {JSX.Element} JSX.Element
 */

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
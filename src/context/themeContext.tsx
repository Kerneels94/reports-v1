/**
 * @description Theme context
 * @returns {JSX.Element} JSX.Element
 */

import { createContext, ReactNode, useState } from "react";
import { ThemeContextType } from "../types/types";

// Create a context
const ThemeContext = createContext({});

/**
 * @description Theme provider
 * @param {ReactNode} children
 * @returns {JSX.Element} JSX.Element
 */

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<ThemeContextType>({theme: "light", setTheme: (theme: string) => {return theme}});

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
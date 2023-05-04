import { ReactNode, createContext, useState } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  changeTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

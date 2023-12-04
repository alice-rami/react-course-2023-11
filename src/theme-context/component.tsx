import { useState, ReactNode, useCallback } from 'react';
import { Theme } from '../types/types';
import { ThemeContext } from './context';

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback((currentTheme: Theme) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

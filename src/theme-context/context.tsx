import React from 'react';
import { Theme } from '../types/types';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme?: (c: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
});

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { ThemeMode } from '../types';
import { lightPalette, darkPalette } from './colors';
import { textStyles } from './TextStyles';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => 
    (localStorage.getItem('theme') as ThemeMode) || 'light'
  );

  useEffect(() => localStorage.setItem('theme', mode), [mode]);

  const toggleTheme = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const theme = useMemo(() => createTheme({
    palette: { mode, ...palette },
    typography: {
      fontFamily: 'Inter',
      h1: textStyles.Banner,
      h2: textStyles.Label,
      body1: textStyles.Filling,
      body2: textStyles.Comment,
      caption: textStyles.Mark,
    },
  }), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
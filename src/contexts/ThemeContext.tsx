// src/contexts/ThemeContext.tsx
import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { ThemeMode } from '../types';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightPalette = {
  primary: {
    main: '#1976d2', // Muted Blue
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#455a64', // Blue Grey
    light: '#718792',
    dark: '#1c313a',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#2e3440', // Dark Academic
    secondary: '#546e7a',
  },
  divider: '#cfd8dc',
  error: {
    main: '#d32f2f',
  },
  warning: {
    main: '#ffa000',
  },
  info: {
    main: '#1976d2',
  },
  success: {
    main: '#388e3c',
  },
};

const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#c3fdff',
    dark: '#5d99c6',
    contrastText: '#000000',
  },
  secondary: {
    main: '#b0bec5',
    light: '#e2f1f8',
    dark: '#808e95',
    contrastText: '#000000',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0bec5',
  },
  divider: '#37474f',
  error: {
    main: '#f44336',
  },
  warning: {
    main: '#ffb74d',
  },
  info: {
    main: '#29b6f6',
  },
  success: {
    main: '#66bb6a',
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme') as ThemeMode;
    return saved || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? lightPalette : darkPalette),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontWeight: 600 },
          h2: { fontWeight: 600 },
          h3: { fontWeight: 600 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 500 },
          h6: { fontWeight: 500 },
        },
        shape: {
          borderRadius: 2, // Academic/Soft look
        },
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true, // Flat design
            },
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 500,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: 'none', // No shadow
                border: mode === 'light' ? '1px solid #cfd8dc' : '1px solid #37474f', // Border for separation
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none', // Remove gradients/overlays
              },
              elevation1: {
                boxShadow: 'none',
                border: mode === 'light' ? '1px solid #e0e0e0' : '1px solid #2d2d2d',
              },
              elevation2: {
                boxShadow: 'none',
              },
              elevation3: {
                boxShadow: 'none',
              },
              elevation4: {
                boxShadow: 'none',
              },
            },
          },
          MuiAppBar: {
            defaultProps: {
              elevation: 0,
            },
            styleOverrides: {
              root: {
                borderBottom: mode === 'light' ? '1px solid #cfd8dc' : '1px solid #37474f',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

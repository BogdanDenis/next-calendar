'use client';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme();

export const Providers = ({ children }) => ((
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
));

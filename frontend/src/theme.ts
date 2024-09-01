// src/theme/theme.js (for JavaScript) or src/theme/theme.ts (for TypeScript)
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#33006F', // Purple color
    },
    secondary: {
      main: '#65000B', // Red color
    },
    background: {
      default: '#000000', // Black color for page background
      paper: '#424242', // Dark gray for card backgrounds
    },
    text: {
      primary: '#ffffff', // White text for contrast
      secondary: '#bdbdbd', // Lighter gray text for secondary contrast
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Disable uppercase for buttons
    },
  },
});

export default theme;

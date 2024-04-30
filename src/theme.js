import { createTheme } from '@mui/material/styles'; // Importing createTheme from Material-UI

// Creating a custom theme using createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#b5050e', // Setting red as the primary color
    },
    secondary: {
      main: '#3d0407', // Setting Navy blue as the secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Setting default font family
    h4: {
      fontWeight: 600, // Setting font weight for h4 elements
      color: '#b5050e', // Setting color for h4 elements
    },
    h5: {
      fontWeight: 500, // Setting font weight for h5 elements
    },
    button: {
      textTransform: 'none', // Setting button text transformation to none for more natural text
    },
  },
});

export default theme; // Exporting the custom theme

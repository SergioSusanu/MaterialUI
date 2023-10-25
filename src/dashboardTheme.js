import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
        contained: {
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#495E57",
    },
    secondary: {
      main: "#F4CE14",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing:2
});
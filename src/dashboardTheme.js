import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.875rem",
          fontWeight: "600",
          borderRadius: "9px",
          textTransform: "none",
          "&.MuiButton-contained": {
            backgroundColor: "#009be5",
            "&:hover": {
              backgroundColor: "#006db3",
            },
          },
          "&.MuiButton-outlined": {
            color: "#fff",
            borderColor: "rgba(255,255,255,0.7)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.04)",
            },
          },
        },
        contained: {
          fontSize: "1rem",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.7rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#009be5",
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
    h1: {
      fontSize: "1.6rem",
      fontWeight: "600",
      color: "$fff",
      letterSpacing: "0.5px",
      textTransform: "capitalize",
    },
    borderRadius: '19px'
  },
  spacing: 2,
});
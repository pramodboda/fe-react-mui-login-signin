// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { teal, blueGrey } from "@mui/material/colors";
// Create a theme with custom typography
const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans, system-ui, Avenir, Helvetica, Arial", // Set the desired font family
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: teal, // This is the only one who changes the whole theme color
    text: {
      primary: blueGrey[500],
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;

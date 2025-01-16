import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";

import Login_signin from "./pages/login-signin/Login_signin";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login_signin />
      </ThemeProvider>
    </>
  );
}

export default App;

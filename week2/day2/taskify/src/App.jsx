import React from "react";                       // React import
import CssBaseline from "@mui/material/CssBaseline"; // MUI baseline CSS
import { ThemeProvider, createTheme } from "@mui/material/styles"; // MUI theme
import Home from "./pages/Home";                  // Your Home page component

// Create a basic MUI theme (you can customize later)
const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />   {/* Normalizes CSS for MUI */}
      <Home />          {/* Your main page */}
    </ThemeProvider>
  );
}

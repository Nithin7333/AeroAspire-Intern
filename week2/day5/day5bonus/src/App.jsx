import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, Switch, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: darkMode ? "dark" : "light" },
      }),
    [darkMode]
  );

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Day5BonusApp
            </Typography>
            <Switch checked={darkMode} onChange={toggleTheme} />
            <Link to="/" style={{ color: "inherit", marginLeft: 10 }}>Home</Link>
            <Link to="/add" style={{ color: "inherit", marginLeft: 10 }}>Add Task</Link>
            <Link to="/about" style={{ color: "inherit", marginLeft: 10 }}>About</Link>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

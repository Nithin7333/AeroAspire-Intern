import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #5e35b1 0%, #7b1fa2 100%)",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", letterSpacing: "0.5px" }}
        >
          TaskMaster
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Task
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

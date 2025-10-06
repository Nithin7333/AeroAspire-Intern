import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { Typography, TextField, Box } from "@mui/material";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState(""); // new search state

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  // filter tasks based on search input
  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>Home</Typography>

      {/* Search box */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Search Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          fullWidth
        />
      </Box>

      {filteredTasks.length === 0 ? <p>No tasks found</p> : <TaskList tasks={filteredTasks} />}
    </div>
  );
}

export default Home;

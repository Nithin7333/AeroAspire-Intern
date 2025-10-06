import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function AddTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const handleAdd = () => {
    if (task.trim().length < 3) return;
    const updated = [...tasks, task];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setTask("");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Add Task</Typography>
      <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
        <TextField
          label="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          size="small"
          fullWidth
        />
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Box>
    </div>
  );
}

export default AddTask;

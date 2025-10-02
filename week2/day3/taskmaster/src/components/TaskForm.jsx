import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length < 4) { // changed minimum characters
      setError("Task must be at least 4 characters long");
      return;
    }
    setError("");
    onAddTask(task);
    setTask("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1.5, mt: 2 }}
    >
      <TextField
        label="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        error={!!error}
        helperText={error}
        size="small"
        fullWidth
      />
      <Button type="submit" variant="contained" color="secondary">
        Add Task
      </Button>
    </Box>
  );
}

export default TaskForm;

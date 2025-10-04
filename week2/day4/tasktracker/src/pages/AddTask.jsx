import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  Box,
  Alert,
} from "@mui/material";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) return alert("Title should be at least 3 characters long!");

    const newTask = { title, description, priority };
    const existing = JSON.parse(localStorage.getItem("tasks")) || [];
    existing.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existing));

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add New Task
      </Typography>

      {success && <Alert severity="success">Task added successfully!</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Priority"
          select
          fullWidth
          margin="normal"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
          Save Task
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;

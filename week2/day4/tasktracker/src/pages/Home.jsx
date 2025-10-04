import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Your Tasks
      </Typography>
      {tasks.length === 0 ? (
        <Typography>No tasks yet! Go add one 😊</Typography>
      ) : (
        <Grid container spacing={2}>
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: "#f3e5f5",
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{task.title}</Typography>
                  <Typography color="text.secondary">
                    {task.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Priority: {task.priority}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ mt: 2 }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;

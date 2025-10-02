import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(["Read Internship Notes", "Setup VS Code"]); // dummy tasks
  }, []);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Task Hub
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Keep track of your tasks easily 👌
      </Typography>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </Container>
  );
}

export default Home;

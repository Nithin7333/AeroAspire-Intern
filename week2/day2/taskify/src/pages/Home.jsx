import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TaskCard from '../components/TaskCard'

export default function Home() {
  const tasks = [
    { id: 1, title: "Learn React", description: "Understand components & props", dueDate: "2025-10-05" },
    { id: 2, title: "Build UI", description: "Use Material UI for styling", dueDate: "2025-10-06" },
    { id: 3, title: "Complete Assignment", description: "Render list of tasks with props", dueDate: "2025-10-07" },
  ]

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>My Tasks</Typography>

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
        />
      ))}
    </Container>
  )
}

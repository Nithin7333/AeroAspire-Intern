import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function TaskCard({ title, description, dueDate }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">Due: {dueDate}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

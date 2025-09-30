import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to MyInternshipApp
      </Typography>

      <Typography variant="body1" paragraph>
        This homepage uses Material UI Typography and AppBar. Replace this with your own content.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Features:
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <li><Typography variant="body2">React + Vite setup</Typography></li>
        <li><Typography variant="body2">MUI AppBar for navigation</Typography></li>
        <li><Typography variant="body2">Typography for text styling</Typography></li>
      </Box>
    </Container>
  )
}

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const About = () => {
  return (
    <Container sx={{ mt: 6, textAlign: "center" }}>
      <InfoOutlinedIcon color="secondary" sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        About TaskMate
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto" }}>
        TaskMate helps you organize your day by adding and tracking tasks with
        ease. It saves your data directly to your browser using{" "}
        <b>localStorage</b>, so you never lose progress even after refreshing!
      </Typography>
      <Typography variant="body2" sx={{ mt: 3, color: "text.secondary" }}>
        Built  using React and Material-UI by Nithin.
      </Typography>
    </Container>
  );
};

export default About;

import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

function TaskList({ tasks }) {
  return (
    <List sx={{ mt: 2 }}>
      {tasks.map((t, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={t} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TaskList;

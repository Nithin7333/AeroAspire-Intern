import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

function TaskList({ tasks }) {
  return (
    <List>
      {tasks.map((t, i) => (
        <React.Fragment key={i}>
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

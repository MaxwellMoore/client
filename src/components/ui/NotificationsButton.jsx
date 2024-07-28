import React from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationsButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="options">
      <NotificationsIcon />
    </IconButton>
  );
};

export default NotificationsButton;

import React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="options">
      <AccountCircleIcon />
    </IconButton>
  );
};

export default ProfileButton;

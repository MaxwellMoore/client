import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

const RefreshButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="options">
      <RefreshIcon />
    </IconButton>
  );
};

export default RefreshButton;

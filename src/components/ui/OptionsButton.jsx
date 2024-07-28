import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const OptionsButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="options">
      <MoreVertIcon />
    </IconButton>
  );
};

export default OptionsButton;

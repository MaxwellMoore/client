import React from "react";
import IconButton from "@mui/material/IconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const XButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="X" className="text-white">
      <ClearRoundedIcon />
    </IconButton>
  );
};

export default XButton;

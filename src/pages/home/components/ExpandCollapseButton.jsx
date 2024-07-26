import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const ExpandCollapseButton = ({ expanded, onToggle }) => {
  return (
    <IconButton
      onClick={onToggle}
      aria-label={expanded ? "Collapse" : "Expand"}
    >
      {expanded ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default ExpandCollapseButton;

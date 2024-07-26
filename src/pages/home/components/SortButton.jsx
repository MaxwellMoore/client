import React from "react";
import IconButton from "@mui/material/IconButton";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

const SortButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="filter">
      <SortRoundedIcon />
    </IconButton>
  );
};

export default SortButton;

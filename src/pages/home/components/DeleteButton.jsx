import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const DeleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="delete">
      <DeleteRoundedIcon />
      <span className="ml-4">Delete</span>
    </IconButton>
  );
};

export default DeleteButton;

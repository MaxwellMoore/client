import React from "react";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const EditButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="filter" className="text-gray-700">
      <EditRoundedIcon />
      <span className="ml-4">Edit</span>
    </IconButton>
  );
};

export default EditButton;

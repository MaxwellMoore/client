import React from "react";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function ItemOptionsMenu({ toggleUpdate, handleDelete }) {
  return (
    <div className="flex flex-col w-fit p-1.5 rounded bg-white shadow-md">
      <div className="w-full px-2 mb-1 rounded bg-gray-200 hover:bg-gray-300">
        <IconButton
          onClick={toggleUpdate}
          aria-label="edit"
          className="text-gray-700"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
          }}
        >
          <EditRoundedIcon fontSize="small" />
          <span className="ml-4 text-sm">Edit</span>
        </IconButton>
      </div>
      <div className="w-fit px-2 rounded bg-red-500 hover:bg-red-600">
        <IconButton
          onClick={handleDelete}
          aria-label="delete"
          className="text-red-50"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
          }}
        >
          <DeleteRoundedIcon fontSize="small" />
          <span className="ml-4 text-sm">Delete</span>
        </IconButton>
      </div>
    </div>
  );
}

export default ItemOptionsMenu;

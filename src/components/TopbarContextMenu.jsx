import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

function TopbarContextMenu({ toggleSettings }) {
  return (
    <div className="flex flex-col w-fit p-1.5 rounded bg-white shadow-md">
      <div className="w-full px-2 rounded bg-gray-200 hover:bg-gray-300">
        <IconButton
          onClick={toggleSettings}
          aria-label="settings"
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
          <SettingsIcon fontSize="small" />
          <span className="ml-4 text-sm">Settings</span>
        </IconButton>
      </div>
    </div>
  );
}

export default TopbarContextMenu;

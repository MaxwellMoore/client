import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const CheckboxButton = ({ checked, onToggle }) => {
  return (
    <Checkbox
      checked={checked}
      icon={<CheckBoxOutlineBlankIcon />}
      checkedIcon={<CheckBoxIcon />}
      onClick={onToggle}
      sx={{
        color: "#374151",
        "&.Mui-checked": {
          color: "#374151",
        },
      }}
    />
  );
};

export default CheckboxButton;

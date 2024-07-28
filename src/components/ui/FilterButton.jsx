import React from "react";
import IconButton from "@mui/material/IconButton";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const FilterButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="filter">
      <FilterListRoundedIcon />
    </IconButton>
  );
};

export default FilterButton;

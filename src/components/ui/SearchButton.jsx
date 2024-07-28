import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="options">
      <SearchIcon />
    </IconButton>
  );
};

export default SearchButton;

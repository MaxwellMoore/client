import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const BookmarkButton = ({ isBookmarked, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <IconButton onClick={handleClick} className="text-gray-700">
      {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default BookmarkButton;

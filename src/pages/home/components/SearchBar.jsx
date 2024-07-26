import React, { useState } from "react";
import SearchButton from "./SearchButton";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="flex items-center mx-2 w-full max-w-2xl bg-gray-200 rounded-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Applications"
        className="flex-grow focus:outline-none ml-4 bg-gray-200"
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
};
export default SearchBar;

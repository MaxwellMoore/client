import React, { useState } from "react";
import RefreshButton from "./RefreshButton";
import OptionsButton from "./OptionsButton";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";
import ListContainer from "./ListContainer";
import CreateForm from "./CreateForm";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";

function Dashboard() {
  const [composeFormVis, setComposeFormVis] = useState(false);
  const [filterFormVis, setFilterFormVis] = useState(false);
  const [sortFormVis, setSortFormVis] = useState(false);

  const handleRefreshClick = () => {
    // TODO: Implement functionality
  };
  const handleOptionsClick = () => {
    // TODO: Implement functionality
  };
  const toggleCompose = () => {
    setComposeFormVis(!composeFormVis);
  };
  const handleComposeSubmit = (item) => {
    console.log(item);
    toggleCompose();
  };
  const toggleFilter = () => {
    setFilterFormVis(!filterFormVis);
  };
  const handleFilterSubmit = () => {
    console.log("Filter Submit");
    toggleFilter();
  };
  const toggleSort = () => {
    setSortFormVis(!sortFormVis);
  };
  const handleSortSubmit = () => {
    console.log("Sort Submit");
    toggleSort();
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center w-full h-14 px-2.5 bg-gray-200 border-b border-gray-400">
        <div>
          <RefreshButton onClick={handleRefreshClick} />
          <FilterButton onClick={toggleFilter} />
          <SortButton onClick={toggleSort} />
        </div>
        <div>
          <button
            onClick={toggleCompose}
            className="mr-2 py-2 px-4 rounded-lg text-red-50 bg-red-500 hover:bg-red-600"
          >
            Compose
          </button>
          <OptionsButton onClick={handleOptionsClick} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ListContainer />
      </div>
      {composeFormVis && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <CreateForm onSubmit={handleComposeSubmit} onClose={toggleCompose} />
        </div>
      )}
      {filterFormVis && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <FilterForm onSubmit={handleFilterSubmit} onClose={toggleFilter} />
        </div>
      )}
      {sortFormVis && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <SortForm onSubmit={handleSortSubmit} onClose={toggleSort} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import {
  getApps,
  getFilteredApps,
  getSortedApps,
  addApp,
} from "../services/api/api";
import RefreshButton from "./ui/RefreshButton";
import OptionsButton from "./ui/OptionsButton";
import FilterButton from "./ui/FilterButton";
import SortButton from "./ui/SortButton";
import CreateForm from "./CreateForm";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";
import List from "./List.applications";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [composeFormVis, setComposeFormVis] = useState(false);
  const [filterState, setFilterState] = useState();
  const [filterFormVis, setFilterFormVis] = useState(false);
  const [sortFormVis, setSortFormVis] = useState(false);

  useEffect(() => {
    getApps(setIsLoading, setApplications);
  }, []);

  const handleRefreshClick = async () => {
    setFilterState();
    await getApps(setIsLoading, setApplications);
  };
  const handleOptionsClick = () => {
    // TODO: Implement functionality
  };
  const toggleCompose = () => {
    setComposeFormVis(!composeFormVis);
  };
  const handleComposeSubmit = async (item) => {
    await addApp(item, setIsLoading, setApplications);
    await getApps(setIsLoading, setApplications);
    toggleCompose();
  };
  const toggleFilter = () => {
    setFilterFormVis(!filterFormVis);
  };
  const handleFilterSubmit = async (filter) => {
    setFilterState(filter);
    await getFilteredApps(filter, setIsLoading, setApplications);
    toggleFilter();
  };
  const toggleSort = () => {
    setSortFormVis(!sortFormVis);
  };
  const handleSortSubmit = async (sort) => {
    await getSortedApps(filterState, sort, setIsLoading, setApplications);
    toggleSort();
  };

  return (
    <div className="flex flex-col flex-grow w-full overflow-auto">
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
      {isLoading ? (
        <div className="flex-1">Loading...</div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <List
            items={applications}
            getApps={getApps}
            setIsLoading={setIsLoading}
            setApplications={setApplications}
          />
        </div>
      )}

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

import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Content({
  user,
  isLoading,
  setIsLoading,
  applications,
  setApplications,
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Topbar user={user} />
      <div className="flex-grow flex flex-row overflow-auto">
        <Sidebar
          setIsLoading={setIsLoading}
          setApplications={setApplications}
        />
        <Dashboard
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          applications={applications}
          setApplications={setApplications}
        />
      </div>
    </div>
  );
}

export default Content;

import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Content() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Topbar />
      <div className="flex-grow flex flex-row overflow-auto">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Content;

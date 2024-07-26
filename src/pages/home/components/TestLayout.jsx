import React from "react";
import Topbar from "./Topbar";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";

function Content() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <div className="flex-1">
        <Topbar />
      </div>
      <div className="flex flex-row w-full h-full">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Content;

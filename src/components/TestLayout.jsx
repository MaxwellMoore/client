import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Content() {
  return (
    // <div className="flex flex-col w-full h-screen overflow-hidden">
    //   <Topbar />
    //   <div className="flex-1 flex flex-row h-full">
    //     <Sidebar />
    //     <Dashboard />
    //   </div>
    // </div>
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-fit">
        <Topbar />
      </div>
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default Content;

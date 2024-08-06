import React, { useState } from "react";
import ExpandCollapseButton from "./ui/ExpandCollapseButton";
import SideBarFilterButton from "./ui/SideBarFilterButton";
import InboxIcon from "@mui/icons-material/Inbox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChecklistRtlRoundedIcon from "@mui/icons-material/ChecklistRtlRounded";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Check } from "@mui/icons-material";
import { getFilteredApps } from "../services/api/api";

function Sidebar({ setIsLoading, setApplications }) {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  const handleAllAppsClick = () => {
    console.log("All Applications Sidebar Button Clicked");
  };
  const handleBookmarkedClick = async () => {
    await getFilteredApps({ bookmarked: true }, setIsLoading, setApplications);
  };
  const handleStatusClick = () => {
    console.log("Status Sidebar Button Clicked");
  };
  const handleYearClick = () => {
    console.log("Year Sidebar Button Clicked");
  };
  const handleCompanyClick = () => {
    console.log("Company Sidebar Button Clicked");
  };
  const handleLogoutClick = () => {
    console.log("Log out clicked");
  };

  return (
    <div className="flex h-full">
      <div
        className={`flex flex-col justify-between items-center ${expanded ? "w-56" : "w-14"} p-1.5 bg-gray-200 border-r border-gray-400`}
      >
        <div
          className={`flex flex-col w-full ${expanded ? "items-start" : "items-center"}`}
        >
          <div
            className={`flex flex-row ${expanded ? "justify-end" : "justify-center"} items-center w-full`}
          >
            <ExpandCollapseButton
              expanded={expanded}
              onToggle={toggleSidebar}
            />
          </div>
          <div flex flex-col w-full>
            <SideBarFilterButton
              expanded={expanded}
              text="All Applications"
              color="primary"
              Icon={InboxIcon}
              onClick={handleAllAppsClick}
            />

            <SideBarFilterButton
              expanded={expanded}
              text="Bookmarked"
              color="primary"
              Icon={BookmarkIcon}
              onClick={handleBookmarkedClick}
            />

            <SideBarFilterButton
              expanded={expanded}
              text="Status"
              color="primary"
              Icon={ChecklistRtlRoundedIcon}
              onClick={handleStatusClick}
            />

            <SideBarFilterButton
              expanded={expanded}
              text="Year"
              color="primary"
              Icon={CalendarMonthSharpIcon}
              onClick={handleYearClick}
            />

            <SideBarFilterButton
              expanded={expanded}
              text="Company Name"
              color="primary"
              Icon={WorkRoundedIcon}
              onClick={handleCompanyClick}
            />
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <SideBarFilterButton
            expanded={expanded}
            text="Log out"
            color="primary"
            Icon={LogoutRoundedIcon}
            onClick={handleLogoutClick}
          />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

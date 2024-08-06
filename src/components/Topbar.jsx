import React, { useState, useEffect } from "react";
import ProfileButton from "./ui/ProfileButton";
import NotificationsButton from "./ui/NotificationsButton";
import OptionsButton from "./ui/OptionsButton";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { getCurrentUser } from "../services/api/api";

function Topbar() {
  const [user, setUser] = useState();
  const [profileVis, setProfileVis] = useState(false);

  const handleSearchSubmit = () => {
    // TODO: Implement functionality
  };
  const toggleProfile = () => {
    setProfileVis(!profileVis);
  };
  const handleNotificationsClick = () => {
    // TODO: Implement functionality
  };
  const handleOptionsClick = () => {
    // TODO: Implement functionality
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getCurrentUser();
      setUser(response);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-shrink-0 items-center w-full h-14 bg-blue-500">
      <div className="flex flex-grow justify-center">
        <SearchBar onSearch={handleSearchSubmit} />
      </div>
      <div className="flex flex-row mx-2.5">
        <ProfileButton onClick={toggleProfile} />
        <NotificationsButton onClick={handleNotificationsClick} />
        <OptionsButton onClick={handleOptionsClick} />
      </div>
      {profileVis && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Profile user={user} onClose={toggleProfile} />
        </div>
      )}
    </div>
  );
}

export default Topbar;

import React, { useState } from "react";
import ProfileButton from "./ui/ProfileButton";
import NotificationsButton from "./ui/NotificationsButton";
import OptionsButton from "./ui/OptionsButton";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function Topbar() {
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

  return (
    <div className="flex items-center w-full h-16 bg-blue-500">
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
          <Profile onClose={toggleProfile} />
        </div>
      )}
    </div>
  );
}

export default Topbar;

import React, { useState } from "react";
import PropTypes from "prop-types";
import XButton from "./ui/XButton";
import { deleteSession } from "../services/api/api";

const Profile = ({ user, onSubmit, onClose }) => {
  const [profile, setProfile] = useState({
    profileImage: null,
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(profile);
    // if (onSubmit) onSubmit(profile); // Call onSubmit prop with the profile state
    await deleteSession();
    window.location.href = "/auth/login";
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-row mb-4">
          <div className="w-full py-2 px-4 rounded bg-gray-200 text-gray-700">
            User Profile
          </div>
          <div className="ml-1 rounded bg-red-500">
            <XButton onClick={onClose} />
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          {user.picture ? (
            <img
              src={user.picture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Profile Image</label>
          <input
            type="file"
            name="profileImage"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

Profile.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default Profile;

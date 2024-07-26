import React, { useState } from "react";
import PropTypes from "prop-types";
import XButton from "./XButton";

const FilterForm = ({ onSubmit, onClose }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const [filter, setFilter] = useState({
    company: "",
    title: "",
    status: {
      underReview: false,
      interview: false,
      accepted: false,
      rejected: false,
    },
    createdAtStart: "",
    createdAtEnd: currentDate,
    updatedAtStart: "",
    updatedAtEnd: currentDate,
    bookmarked: false,
  });

  const handleStatusClick = (statusKey) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      status: {
        ...prevFilter.status,
        [statusKey]: !prevFilter.status[statusKey],
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter({
      ...filter,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filter);
    onSubmit();
    // Handle the filter logic here
  };

  const getStatusClass = (statusKey) =>
    filter.status[statusKey]
      ? "bg-gray-500 text-white"
      : "bg-gray-200 text-gray-700";

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-row mb-4">
          <div className="w-full py-2 px-4 rounded bg-gray-200 text-gray-700">
            Filter Applications
          </div>
          <div className="ml-1 rounded bg-red-500">
            <XButton onClick={onClose} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={filter.company}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={filter.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <div className="grid grid-cols-2 gap-2">
            {["underReview", "interview", "accepted", "rejected"].map(
              (status) => (
                <div
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`px-4 py-2 cursor-pointer rounded flex items-center justify-center ${getStatusClass(status)}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Created At Range</label>
          <div className="flex space-x-4">
            <input
              type="date"
              name="createdAtStart"
              value={filter.createdAtStart}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            <span className="self-center text-gray-700">to</span>
            <input
              type="date"
              name="createdAtEnd"
              value={filter.createdAtEnd}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Updated At Range</label>
          <div className="flex space-x-4">
            <input
              type="date"
              name="updatedAtStart"
              value={filter.updatedAtStart}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            <span className="self-center text-gray-700">to</span>
            <input
              type="date"
              name="updatedAtEnd"
              value={filter.updatedAtEnd}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="bookmarked"
            checked={filter.bookmarked}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Bookmarked</label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

FilterForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FilterForm;

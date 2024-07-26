import React, { useState } from "react";
import PropTypes from "prop-types";
import XButton from "./XButton";

const SortForm = ({ onSubmit, onClose }) => {
  const [sort, setSort] = useState({
    criteria: "updatedAt",
    order: "asc",
  });

  const handleCriteriaClick = (criteria) => {
    setSort((prevSort) => ({
      ...prevSort,
      criteria,
    }));
  };

  const handleOrderClick = (order) => {
    setSort((prevSort) => ({
      ...prevSort,
      order,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sort);
    if (onSubmit) onSubmit(sort); // Call onSubmit prop with the sort state
  };

  const getOptionClass = (option) =>
    sort.criteria === option
      ? "bg-gray-500 text-white"
      : "bg-gray-200 text-gray-700";

  const getOrderClass = (order) =>
    sort.order === order
      ? "bg-gray-500 text-white"
      : "bg-gray-200 text-gray-700";

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-row mb-4">
          <div className="w-full py-2 px-4 rounded bg-gray-200 text-gray-700">
            Sort Applications
          </div>
          <div className="ml-1 rounded bg-red-500">
            <XButton onClick={onClose} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Sort By</label>
          <div className="grid grid-cols-2 gap-2">
            {["company", "title", "createdAt", "updatedAt"].map((option) => (
              <div
                key={option}
                onClick={() => handleCriteriaClick(option)}
                className={`px-11 py-2 cursor-pointer rounded flex items-center justify-center ${getOptionClass(option)}`}
              >
                {option === "createdAt"
                  ? "Created At"
                  : option === "updatedAt"
                    ? "Updated At"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
              </div>
            ))}
            <div
              onClick={() => handleCriteriaClick("status")}
              className={`col-span-2 px-11 py-2 cursor-pointer rounded flex items-center justify-center ${getOptionClass("status")}`}
            >
              Status
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Order</label>
          <div className="flex space-x-2">
            {["asc", "desc"].map((order) => (
              <button
                key={order}
                type="button"
                onClick={() => handleOrderClick(order)}
                className={`w-1/2 px-11 py-2 rounded ${getOrderClass(order)}`}
              >
                {order === "asc" ? "Ascending" : "Descending"}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Apply Sorting
        </button>
      </form>
    </div>
  );
};

SortForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default SortForm;

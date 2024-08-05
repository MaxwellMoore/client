import React, { useState } from "react";
import BookmarkButton from "./ui/BookmarkButton";
import XButton from "./ui/XButton";

function CreateForm({ onSubmit, onClose }) {
  const [errors, setErrors] = useState({});
  const [item, setItem] = useState({
    status: "",
    company: "",
    title: "",
    updatedAt: "",
    createdAt: "",
  });

  const validate = () => {
    const newErrors = {};
    if (!item.status) newErrors.status = "Status is required";
    if (!item.company) newErrors.company = "Company is required";
    if (!item.title) newErrors.title = "Title is required";
    setErrors(newErrors);
    if (!item.updatedAt) newErrors.updatedAt = "UpdatedAt is required";
    if (!item.createdAt) newErrors.createdAt = "CreatedAt is required";
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(item);
    }
  };

  // Handle Status Change
  const handleStatusChange = (status) => {
    setItem((prev) => ({
      ...prev,
      status,
    }));
  };

  // Handle Bookmark Toggle
  const handleBookmarkToggle = () => {
    setItem((prev) => ({
      ...prev,
      bookmarked: !prev.bookmarked,
    }));
  };

  return (
    <div className="relative max-w-md mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-full py-2 px-4 rounded bg-gray-200 text-gray-700">
            New Application
          </div>
          <div className="ml-1 rounded bg-red-500 hover:bg-red-600">
            <XButton onClick={onClose} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="company" className="text-sm text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={item.company}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            {errors.company && (
              <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
                <p className="p-2 text-base text-red-500">{errors.company}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={item.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            {errors.title && (
              <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
                <p className="p-2 text-base text-red-500">{errors.title}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Status</label>
          <div className="grid grid-cols-2 gap-2">
            {["underReview", "interview", "accepted", "rejected"].map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => handleStatusChange(status)}
                  className={`p-2 rounded ${item.status === status ? "text-white bg-gray-500" : "text-gray-700 bg-gray-200"}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              )
            )}
          </div>
          {errors.status && (
            <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
              <p className="p-2 text-base text-red-500">{errors.status}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="createdAt" className="text-sm text-gray-700">
              Created At
            </label>
            <input
              type="date"
              id="createdAt"
              name="createdAt"
              value={item.createdAt || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            {errors.createdAt && (
              <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
                <p className="p-2 text-base text-red-500">{errors.createdAt}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="updatedAt" className="text-sm text-gray-700">
              Updated At
            </label>
            <input
              type="date"
              id="updatedAt"
              name="updatedAt"
              value={item.updatedAt || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            {errors.updatedAt && (
              <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
                <p className="p-2 text-base text-red-500">{errors.updatedAt}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <BookmarkButton
            isBookmarked={item.bookmarked}
            onToggle={handleBookmarkToggle}
          />
          <span className="ml-2 text-gray-700">Bookmark</span>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;

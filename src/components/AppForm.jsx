import React, { useState } from "react";
import BookmarkButton from "./ui/BookmarkButton";
import DeleteButton from "./ui/DeleteButton";
import XButton from "./ui/XButton";

function formatDateString(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function AppForm({ data, onClose }) {
  const [item, setItem] = useState({
    ...data,
    createdAt: formatDateString(data.createdAt),
    updatedAt: formatDateString(data.updatedAt),
  });

  // Handle Bookmark Toggle
  const handleBookmarkToggle = () => {
    setItem((prev) => ({
      ...prev,
      bookmarked: !prev.bookmarked,
    }));
  };

  return (
    <div className="relative max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-full py-2 px-4 rounded bg-gray-200 text-gray-700">
            Application Details
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
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
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
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
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
                  className={`p-2 rounded ${item.status === status ? "text-white bg-gray-500" : "text-gray-700 bg-gray-200"}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              )
            )}
          </div>
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
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
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
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
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
      </div>
    </div>
  );
}

export default AppForm;

import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import CheckboxButton from "./ui/CheckboxButton";
import BookmarkButton from "./ui/BookmarkButton";
import OptionsButton from "./ui/OptionsButton";
import ItemOptionsMenu from "./ItemsOptionsMenu";
import UpdateForm from "./UpdateForm";

const ApplicationItem = ({ item }) => {
  const [optionsVis, setOptionsVis] = useState(false);
  const [updateFormVis, setUpdateFormVis] = useState(false);

  const getStatusStyles = (status) => {
    switch (status) {
      case "underReview":
        return "bg-gray-200";
      case "interview":
        return "bg-gray-200";
      case "accepted":
        return "bg-gray-200";
      case "rejected":
        return "bg-gray-200";
      default:
        return "bg-gray-200";
    }
  };

  const toggleOptions = () => {
    setOptionsVis(!optionsVis);
  };
  const toggleUpdate = () => {
    setUpdateFormVis(!updateFormVis);
    if (optionsVis) {
      setOptionsVis(false);
    }
  };
  const handleUpdateClick = (item) => {
    console.log(item);
    toggleUpdate();
  };
  const handleDelete = () => {
    console.log("Delete clicked");
    toggleOptions();
  };

  const toggleSelected = () => {
    console.log("Selected clicked!");
  };
  const toggleBookmarked = () => {
    console.log("Bookmark clicked!");
  };

  return (
    <div className="flex flex-row items-center p-2.5 border-b border-b-gray-500 bg-gray-50">
      <div className="flex items-center">
        <CheckboxButton checked={item.selected} onToggle={toggleSelected} />
        <BookmarkButton
          isBookmarked={item.bookmarked}
          onToggle={toggleBookmarked}
        />
      </div>
      <div className="flex flex-row flex-grow max-w-80">
        <div className="flex flex-col w-full ml-2.5">
          <div className="text-black font-medium">{item.title}</div>
          <div className="text-gray-500">{item.company}</div>
        </div>
      </div>

      <div
        className={`${getStatusStyles(item.status)} flex justify-center w-36 px-3.5 py-2 rounded-3xl text-gray-700 font-medium`}
      >
        {item.status}
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex flex-row">
          <div className="flex flex-col items-end text-sm text-gray-500">
            <div>Updated: {formatDate(item.updatedAt)}</div>
            <div>Created: {formatDate(item.createdAt)}</div>
          </div>
          <div className="ml-2.5 relative">
            <OptionsButton onClick={toggleOptions} />
            {optionsVis && (
              <div className="absolute mt-2 right-0 z-50">
                <ItemOptionsMenu
                  toggleUpdate={toggleUpdate}
                  handleDelete={handleDelete}
                />
              </div>
            )}
          </div>
          {updateFormVis && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <UpdateForm
                data={item}
                onSubmit={handleUpdateClick}
                onClose={toggleUpdate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationItem;

//TODO: Add a delta between createdAt and updatedAt to show which companies are more active
//?NOTE: Delta should not count if createdAt and updatedAt are the same

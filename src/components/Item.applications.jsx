import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { getStatusStyles } from "../../utils/formatStatus";
import { updateApp, deleteApp } from "../services/api/api";
import CheckboxButton from "./ui/CheckboxButton";
import BookmarkButton from "./ui/BookmarkButton";
import OptionsButton from "./ui/OptionsButton";
import ItemOptionsMenu from "./ItemsOptionsMenu";
import UpdateForm from "./UpdateForm";

const ApplicationItem = ({ item, getApps, setIsLoading, setApplications }) => {
  const [data, setData] = useState(item);
  const [optionsVis, setOptionsVis] = useState(false);
  const [updateFormVis, setUpdateFormVis] = useState(false);

  const toggleOptions = () => {
    setOptionsVis(!optionsVis);
  };
  const toggleUpdate = () => {
    setUpdateFormVis(!updateFormVis);
    if (optionsVis) {
      setOptionsVis(false);
    }
  };
  const handleUpdate = async (data) => {
    await updateApp(data);
    await getApps(setIsLoading, setApplications);
    toggleUpdate();
  };
  const handleDelete = async () => {
    await deleteApp(data);
    await getApps(setIsLoading, setApplications);
    toggleOptions();
  };

  const toggleSelected = () => {
    console.log("Selected clicked!");
  };
  const toggleBookmarked = async () => {
    const update = data;
    update.bookmarked = !update.bookmarked;
    setData((prev) => ({
      ...prev,
      bookmarked: update.bookmarked,
    }));
    await updateApp(update);
  };

  return (
    <div className="flex flex-row items-center h-fit p-2.5 border-b border-b-gray-500 bg-gray-50">
      <div className="flex items-center">
        <CheckboxButton checked={data.selected} onToggle={toggleSelected} />
        <BookmarkButton
          isBookmarked={data.bookmarked}
          onToggle={toggleBookmarked}
        />
      </div>
      <div className="flex flex-row flex-grow max-w-80">
        <div className="flex flex-col w-full ml-2.5">
          <div className="text-black font-medium">{data.title}</div>
          <div className="text-gray-500">{data.company}</div>
        </div>
      </div>

      <div
        className={`${getStatusStyles(data.status)} flex justify-center w-36 px-3.5 py-2 rounded-3xl border border-purple-700 border-opacity-50 text-purple-700 font-normal`}
      >
        {item.status}
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex flex-row">
          <div className="flex flex-col items-end text-sm text-gray-500">
            <div>Updated: {data.updatedAt}</div>
            <div>Created: {data.createdAt}</div>
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
                data={data}
                onSubmit={handleUpdate}
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

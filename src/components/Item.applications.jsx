import React, { useState, useEffect } from "react";
import { computeDelta, formatDate } from "../../utils/formatDate";
import { getStatusStyles } from "../../utils/formatStatus";
import { updateApp, deleteApp } from "../services/api/api";
import CheckboxButton from "./ui/CheckboxButton";
import BookmarkButton from "./ui/BookmarkButton";
import OptionsButton from "./ui/OptionsButton";
import ItemOptionsMenu from "./ItemsOptionsMenu";
import UpdateForm from "./UpdateForm";
import AppForm from "./AppForm";

const ApplicationItem = ({
  item,
  highlightDate,
  getApps,
  setIsLoading,
  setApplications,
}) => {
  const [data, setData] = useState(item);
  const [createdAt, setCreatedAt] = useState({});
  const [updatedAt, setUpdatedAt] = useState({});
  const [appFormVis, setAppFormVis] = useState(false);
  const [optionsVis, setOptionsVis] = useState(false);
  const [updateFormVis, setUpdateFormVis] = useState(false);

  useEffect(() => {
    setCreatedAt(formatDate(item.createdAt));
    setUpdatedAt(formatDate(item.updatedAt));
  }, []);

  const toggleOptions = () => {
    setOptionsVis(!optionsVis);
  };
  const toggleAppForm = () => {
    setAppFormVis(!appFormVis);
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

      <div
        className="flex-1 flex flex-col w-full  min-w-24 max-w-80 ml-2.5 cursor-pointer"
        onClick={toggleAppForm}
      >
        <div className="text-black font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          {data.title}
        </div>
        <div className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {data.company}
        </div>
      </div>

      <div
        className={`${getStatusStyles(data.status)} flex flex-shrink-0 justify-center w-36 px-3.5 py-2 rounded-3xl text-gray-700 font-normal`}
      >
        {item.status}
      </div>
      <div className="flex-1 flex min-w-fit h-full justify-end">
        <div className="flex flex-row h-full items-center">
          {/* <div className="flex flex-col ml-2 justify-center items-end text-sm text-gray-500">
            <div>Updated: {formatDate(data.updatedAt)}</div>
            <div>Created: {formatDate(data.createdAt)}</div>
          </div> */}
          <div className="flex flex-col justify-center items-end w-fit h-fit p-0.5 mr-1 text-sm text-gray-500">
            <div>updatedAt:</div>
            <div>createdAt:</div>
          </div>
          <div
            className={`flex flex-col w-fit h-fit p-0.5 rounded text-sm text-gray-500 ${updatedAt.year === createdAt.year && updatedAt.month == createdAt.month && highlightDate ? "bg-yellow-200" : ""}`}
          >
            <div>{updatedAt.month}</div>
            <div>{createdAt.month}</div>
          </div>
          <div className="flex flex-col w-fit h-fit p-0.5 text-sm text-gray-500">
            <div>/</div>
            <div>/</div>
          </div>
          <div
            className={`flex flex-col w-fit h-fit p-0.5 rounded text-sm text-gray-500 ${updatedAt.year === createdAt.year && updatedAt.month == createdAt.month && updatedAt.day === createdAt.day && highlightDate ? "bg-yellow-200" : ""}`}
          >
            <div>{updatedAt.day}</div>
            <div>{createdAt.day}</div>
          </div>
          <div className="flex flex-col w-fit h-fit p-0.5 text-sm text-gray-500">
            <div>/</div>
            <div>/</div>
          </div>
          <div
            className={`flex flex-col w-fit h-fit p-0.5 rounded text-sm text-gray-500 ${updatedAt.year === createdAt.year && highlightDate ? "bg-yellow-200" : ""}`}
          >
            <div>{updatedAt.year}</div>
            <div>{createdAt.year}</div>
          </div>

          <div className="flex w-fit min-w-10 h-fit min-h-10 px-2 py-1 ml-2 rounded justify-center items-center text-sm text-purple-700 bg-purple-200">
            <div className="flex justify-center text-lg font-light">
              {computeDelta(data.createdAt, data.updatedAt)}
            </div>
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
          {appFormVis && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <AppForm data={data} onClose={toggleAppForm} />
            </div>
          )}
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

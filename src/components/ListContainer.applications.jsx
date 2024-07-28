import React, { useState, useEffect } from "react";
import FilterForm from "./OldFilterForm";
import List from "./List.applications";
import { dynamicFilter, dynamicSort } from "@/services/query.service";

const ListContainer = ({ items }) => {
  // List State
  const [dynamicItems, setDynamicItems] = useState(items);

  // Filter/Sort States
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    selected: undefined,
    bookmarked: undefined,
    status: undefined,
    createdAtStart: undefined,
    createdAtEnd: undefined,
    updatedAtStart: undefined,
    updatedAtEnd: undefined,
  });
  const [sortOptions, setSortOptions] = useState({
    field: "",
    order: "",
  });
  const [filterSubmitted, setFilterSubmitted] = useState(false);

  // Compose States
  const [showComposeForm, setShowComposeForm] = useState(false);
  const [newItem, setNewItem] = useState({
    selected: false,
    bookmarked: false,
    status: undefined,
    company: undefined,
    title: undefined,
    updatedAt: undefined,
    createdAt: undefined,
  });
  const [composeSubmitted, setComposeSubmitted] = useState(false);

  // Compose Actions
  const toggleComposeForm = () => {
    setShowComposeForm(!showComposeForm);
  };
  const handleComposeSubmit = () => {
    setComposeSubmitted(true);
  };
  useEffect(() => {
    if (composeSubmitted) {
      setShowComposeForm(false);
      setFilterSubmitted(false);
    }
  }, [newItem, composeSubmitted]);

  // Filter/Sort Actions
  const toggleFilterForm = () => {
    setShowFilterForm(!showFilterForm);
  };
  const handleFilterSubmit = () => {
    setFilterSubmitted(true);
  };
  useEffect(() => {
    if (filterSubmitted) {
      const filteredItems = dynamicFilter(items, filterOptions);
      const sortedItems = dynamicSort(filteredItems, sortOptions);
      setDynamicItems(sortedItems);
      setShowFilterForm(false);
      setFilterSubmitted(false);
    }
  }, [filterOptions, sortOptions, filterSubmitted, items]);

  // JSX
  return (
    <div className=" w-4/5 my-0 mx-auto border rounded-md p-5">
      {showComposeForm && (
        <ComposeForm
          onClose={toggleComposeForm}
          onSubmit={handleComposeSubmit}
          setNewItem={setNewItem}
        />
      )}

      {showFilterForm && (
        <FilterForm
          onClose={toggleFilterForm}
          onSubmit={handleFilterSubmit}
          setFilterOptions={setFilterOptions}
          setSortOptions={setSortOptions}
        />
      )}

      <div className=" mb-2.5">
        <button
          onClick={toggleComposeForm}
          className=" mr-2.5 py-2 px-4 cursor-pointer bg-red-500 border-0 rounded-md"
        >
          Compose
        </button>
        <button
          onClick={toggleFilterForm}
          className=" mr-2.5 py-2 px-4 cursor-pointer bg-blue-500 border-0 rounded-md"
        >
          Filter
        </button>
      </div>
      <div className=" overflow-y-auto border rounded-md p-2.5">
        <List items={dynamicItems} />
      </div>
    </div>
  );
};

export default ListContainer;

import React, { useState } from "react";

function OldFilterForm({
  onClose,
  onSubmit,
  setFilterOptions,
  setSortOptions,
}) {
  // TODO: Make the current date the default value for createAtEnd and updatedAtEnd

  const [filters, setFilters] = useState({
    selected: false,
    bookmarked: false,
    status: [],
    createdAtStart: "",
    createdAtEnd: "",
    updatedAtStart: "",
    updatedAtEnd: "",
  });

  const [sort, setSort] = useState({
    field: "",
    order: "",
  });

  // Handle Input
  const handleFiltersChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (
      type === "checkbox" &&
      ["underReview", "interview", "accepted", "rejected"].includes(name)
    ) {
      setFilters((prev) => {
        const newStatus = checked
          ? [...prev.status, name]
          : prev.status.filter((status) => status !== name);

        return {
          ...prev,
          status: newStatus,
        };
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterOptions(filters);
    setSortOptions(sort);
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute object-center bg-orange-100 w-fit h-fit p-2.5 rounded-lg border-2 border-orange-400"
    >
      <button
        className="absolute top-1 right-2 text-red-600"
        type="button"
        onClick={onClose}
      >
        X
      </button>

      <h2>Filters</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="bookmarked"
            checked={filters.bookmarked}
            onChange={handleFiltersChange}
          />
          Bookmarked
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="underReview"
            checked={filters.status.includes("underReview")}
            onChange={handleFiltersChange}
          />
          Under Review
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="interview"
            checked={filters.status.includes("interview")}
            onChange={handleFiltersChange}
          />
          Interview
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="accepted"
            checked={filters.status.includes("accepted")}
            onChange={handleFiltersChange}
          />
          Accepted
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="rejected"
            checked={filters.status.includes("rejected")}
            onChange={handleFiltersChange}
          />
          Rejected
        </label>
      </div>

      <div>
        <label htmlFor="createdAtStart">Submitted Start</label>
        <input
          type="date"
          id="createdAtStart"
          name="createdAtStart"
          value={filters.createdAtStart}
          onChange={handleFiltersChange}
        />
        <label htmlFor="createdAtEnd">Submitted End</label>
        <input
          type="date"
          id="createdAtEnd"
          name="createdAtEnd"
          value={filters.createdAtEnd}
          onChange={handleFiltersChange}
        />
      </div>
      <div>
        <label htmlFor="updatedAtStart">Last Updated Start</label>
        <input
          type="date"
          id="updatedAtStart"
          name="updatedAtStart"
          value={filters.updatedAtStart}
          onChange={handleFiltersChange}
        />
        <label htmlFor="updatedAtEnd">Last Updated End</label>
        <input
          type="date"
          id="updatedAtEnd"
          name="updatedAtEnd"
          value={filters.updatedAtEnd}
          onChange={handleFiltersChange}
        />
      </div>

      <div>
        <h2>Sort</h2>
        <label>
          <input
            type="radio"
            name="field"
            value="company"
            checked={sort.field === "company"}
            onChange={handleSortChange}
          />
          company
        </label>
        <label>
          <input
            type="radio"
            name="field"
            value="title"
            checked={sort.field === "title"}
            onChange={handleSortChange}
          />
          title
        </label>
        <label>
          <input
            type="radio"
            name="field"
            value="createdAt"
            checked={sort.field === "createdAt"}
            onChange={handleSortChange}
          />
          createdAt
        </label>
        <label>
          <input
            type="radio"
            name="field"
            value="updatedAt"
            checked={sort.field === "updatedAt"}
            onChange={handleSortChange}
          />
          updatedAt
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="asc"
            checked={sort.order === "asc"}
            onChange={handleSortChange}
          />
          asc
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="desc"
            checked={sort.order === "desc"}
            onChange={handleSortChange}
          />
          desc
        </label>
      </div>

      <button
        type="submit"
        className="py-1.5 px-3.5 bg-orange-400 rounded-3xl "
      >
        Submit
      </button>
    </form>
  );
}

export default OldFilterForm;

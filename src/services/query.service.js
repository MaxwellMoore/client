// options: {
//     selected: Boolean || undefined,
//     bookmarked: Boolean || undefined,
//     status: String Array,
//     createdAtStart: Date || [ undefined, null, false, NaN, 0, "" ],
//     createdAtEnd: Date || [ undefined, null, false, NaN, 0, "" ],
//     updatedAtStart: Date || [ undefined, null, false, NaN, 0, "" ],
//     updatedAtEnd: Date || [ undefined, null, false, NaN, 0, "" ],
// }
export const dynamicFilter = (array, options) => {
  return array.filter((item) => {
    let isValid = true;

    // Filter by selected
    if (options.selected === true && item.selected !== options.selected) {
      isValid = false;
    }

    // Filter by bookmarked
    if (options.bookmarked === true && item.bookmarked !== options.bookmarked) {
      isValid = false;
    }

    // Filter by status
    if (options.status.length !== 0 && !options.status.includes(item.status)) {
      isValid = false;
    }

    // Filter by createdAt
    if (
      options.createdAtStart &&
      item.createdAt < new Date(options.createdAtStart)
    ) {
      isValid = false;
    }
    if (
      options.createdAtEnd &&
      item.createdAt > new Date(options.createdAtEnd)
    ) {
      isValid = false;
    }

    // Filter by updatedAt
    if (
      options.updatedAtStart &&
      item.updatedAt < new Date(options.updatedAtStart)
    ) {
      isValid = false;
    }
    if (
      options.updatedAtEnd &&
      item.updatedAt > new Date(options.updatedAtEnd)
    ) {
      isValid = false;
    }

    // Resolve
    return isValid;
  });
};

// options: {
//     field: ["createdAt", "updatedAt", "company", "title"]
//     order: ["asc", "desc"]
// }
export const dynamicSort = (array, options) => {
  const { field, order } = options;

  return array.sort((a, b) => {
    if (field === "createdAt" || field === "updatedAt") {
      return order === "asc" ? a[field] - b[field] : b[field] - a[field];
    } else {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    }
  });
};

export const formatDate = (date) => {
  // Check if the date is already a Date object, if not, convert it
  const validDate = date instanceof Date ? date : new Date(date);

  // Validate if the date is valid
  if (isNaN(validDate.getTime())) {
    throw new Error("Invalid date");
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

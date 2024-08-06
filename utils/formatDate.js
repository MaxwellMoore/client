export const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();

  // return `${month}/${day}/${year}`;
  return { day: day, month: month, year: year };
};

export const computeDelta = (date1, date2) => {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);

  // Calculate difference in milliseconds
  const differenceInMillis = Math.abs(dateObj2 - dateObj1);

  // Convert milliseconds to days
  const differenceInDays = Math.floor(
    differenceInMillis / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
};

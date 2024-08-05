export const getStatusStyles = (status) => {
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

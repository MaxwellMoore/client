export const getStatusStyles = (status) => {
  switch (status) {
    case "underReview":
      return "bg-purple-100";
    case "interview":
      return "bg-purple-100";
    case "accepted":
      return "bg-purple-100";
    case "rejected":
      return "bg-purple-100";
    default:
      return "bg-purple-100";
  }
};

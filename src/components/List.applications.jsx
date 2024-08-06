import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({
  items,
  highlightDate,
  getApps,
  setIsLoading,
  setApplications,
}) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-500 bg-opacity-50">
      {items.map((item) => (
        <ApplicationItem
          key={item.product_id}
          item={item}
          highlightDate={highlightDate}
          getApps={getApps}
          setIsLoading={setIsLoading}
          setApplications={setApplications}
        />
      ))}
    </div>
  );
};

export default List;

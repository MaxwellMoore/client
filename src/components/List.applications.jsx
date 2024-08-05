import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({ items, getApps, setIsLoading, setApplications }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50">
      {items.map((item) => (
        <ApplicationItem
          key={item.product_id}
          item={item}
          getApps={getApps}
          setIsLoading={setIsLoading}
          setApplications={setApplications}
        />
      ))}
    </div>
  );
};

export default List;

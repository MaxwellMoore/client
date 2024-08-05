import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({ items, getApps }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50">
      {items.map((item) => (
        <ApplicationItem key={item.product_id} item={item} getApps={getApps} />
      ))}
    </div>
  );
};

export default List;

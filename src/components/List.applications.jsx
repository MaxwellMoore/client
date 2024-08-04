import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({ items }) => {
  return (
    <div className="w-full h-full bg-gray-50">
      {items.map((item) => (
        <ApplicationItem key={item.product_id} item={item} />
      ))}
    </div>
  );
};

export default List;

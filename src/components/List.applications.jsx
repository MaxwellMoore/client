import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item) => (
        <ApplicationItem key={item.product_id} item={item} />
      ))}
    </div>
  );
};

export default List;

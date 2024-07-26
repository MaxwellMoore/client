import React from "react";
import ApplicationItem from "./Item.applications";

const List = ({ items }) => {
  return (
    <div className="w-full overflow-y-auto">
      {items.map((item) => (
        <ApplicationItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;

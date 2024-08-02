import React from "react";
import List from "./List.applications";

function ListContainer({ items }) {
  return (
    <div className="flex flex-col w-full h-full bg-orange-500">
      <List items={items} />
    </div>
  );
}

export default ListContainer;

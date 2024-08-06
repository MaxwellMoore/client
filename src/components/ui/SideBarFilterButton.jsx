import React from "react";

const SideBarFilterButton = ({ expanded, text, color, Icon, onClick }) => {
  const baseClasses =
    "flex items-center px-2 py-2 rounded-md text-black font-medium";
  const colorClasses =
    color === "primary"
      ? "bg-transparent hover:bg-gray-400 hover:bg-opacity-50 focus:bg-gray-400 focus:bg-opacity-50"
      : color === "secondary"
        ? "bg-transparent hover:bg-green-600 focus:ring-green-500"
        : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-500";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${expanded ? "w-full" : "w-auto"}`}
    >
      {Icon && <Icon />}
      {expanded && <span className="ml-2">{text}</span>}
    </button>
  );
};

export default SideBarFilterButton;

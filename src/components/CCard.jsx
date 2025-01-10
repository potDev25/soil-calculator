import React from "react";

export default function CCard({
    title = '',
    value = 0
}) {
  return (
    <div className="outline mb-5 outline-1 outline-gray-300 rounded-md shadow-lg">
      <div className="border-b border-gray-300 text-sm bg-blue-500 rounded-md rounded-b-none text-white uppercase px-2 py-1">
        {title}
      </div>
      <div className="text-sm px-2 py-1">{value}</div>
    </div>
  );
}

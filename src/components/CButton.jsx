import React from "react";

export default function CButton({ color = "", text = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md text-white text-sm shadow-sm px-5 py-2 active:bg-white active:outline-1 active:text-gray-400 active:outline ${color}`}
    >
      {text}
    </button>
  );
}

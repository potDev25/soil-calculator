import React from "react";

export default function CCard({
  title = "",
  value = 0,
  numerator = "",
  denuminator = "",
  right_num = null,
  with_sol = false,
  numerator_text = "",
  right_num_text = "",
  denuminator_text = "",
  components = <></>
}) {
  return (
    <div className="outline mb-5 outline-1 outline-gray-300 rounded-md shadow-lg">
      <div className="border-b border-gray-300 text-sm bg-blue-500 rounded-md rounded-b-none text-white uppercase px-2 py-1">
        {title}
      </div>
      <div className="text-sm px-2 py-1">
        <div className="flex items-center justify-center gap-5">
          {with_sol ? (
            <>
             {components}
            </>
          ) : null}
        </div>
        <div className="text-center border border-black p-1 rounded-md font-semibold">
          <div className="flex items-center justify-center gap-20">
            <span
              className={`${with_sol ? "text-green-500" : "text-blue-500"}`}
            >
              {with_sol ? "Answer" : "Given"}
            </span>
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Input, Select } from "antd";
import React from "react";

export default function CSelect({
  labelText = "",
  value = null,
  onChange,
  placeholder = "",
  handleChange,
}) {
  return (
    <div className="mb-4">
      <label htmlFor="" className="text-sm text-gray-700 font-[500]">
        {labelText}
      </label> <br />
      <Select
        defaultValue="unit-1"
        className="w-full"
        onChange={handleChange}
        options={[
          { value: "unit-1", label: "Unit One" },
          { value: "unit-2", label: "Unit Two" },
        ]}
      />
    </div>
  );
}

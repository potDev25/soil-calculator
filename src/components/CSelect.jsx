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
        className="w-full"
        defaultValue={{ value: value, label: "SI Unit (9.81)" }}
        onChange={handleChange}
        options={[
          { value: 9.81, label: "SI Unit (9.81)" },
          { value: 62.4, label: "English Unit (62.4)" },
        ]}
      />
    </div>
  );
}

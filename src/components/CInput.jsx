import { Input } from "antd";
import React from "react";

export default function CInput({
    labelText = '',
    value = null,
    onChange,
    placeholder = ''
}) {
  return (
    <div className="mb-4">
      <label htmlFor="" className="text-sm text-gray-700 font-[500]">
        {labelText}
      </label>
      <Input 
        type="number"
        min={0}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

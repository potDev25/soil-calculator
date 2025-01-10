import React from "react";
import CInput from "../CInput";
import CSelect from "../CSelect";

export default function InputGroup() {
  return (
    <div>
      <CInput labelText="Value One" placeholder="Enter Value One" />
      <CInput labelText="Value One" placeholder="Enter Value One" />
      <CInput labelText="Value One" placeholder="Enter Value One" />
      <CSelect labelText="Select Unit" placeholder="Enter Value One" />
    </div>
  );
}

import React from "react";
import form1 from "../../assets/images/n.png";
import { useSelector } from "react-redux";

export default function Porosity({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[120px] h-[100]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>n = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{properties.void_ratio}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>1 + {properties.void_ratio}</strong>
            </div>
          </div>
        </div>
    </div>
  );
}

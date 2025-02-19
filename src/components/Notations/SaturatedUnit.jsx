import React from "react";
import form1 from "../../assets/images/ysat.png";
import { useSelector } from "react-redux";

export default function SaturatedUnit({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[155px] h-[110px]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>ysat = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations.g} + {properties.void_ratio}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>1 + {properties.void_ratio}</strong>
            </div>
            <strong>{notations.yw}</strong>
          </div>
        </div>
    </div>
  );
}

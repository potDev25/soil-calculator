import React from "react";
import form1 from "../../assets/images/yb-2.png";
import form2 from "../../assets/images/yb-1.png";
import { useSelector } from "react-redux";

export default function BouyantUnit({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
      {notations?.ysat > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[120px] h-[100]" />

          <div className="flex items-center justify-center gap-2">
            <strong>yb = {notations.ysat} - {notations.yw}</strong>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <img src={form2} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>yb = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.g} - 1
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[150px] bg-black"></div>
              </div>
              <strong>
                {properties.void_ratio} + {notations.yw}
              </strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

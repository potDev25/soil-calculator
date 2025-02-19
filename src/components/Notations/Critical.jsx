import React from "react";
import form1 from "../../assets/images/icr-2.png";
import form2 from "../../assets/images/icr-1.png";
import { useSelector } from "react-redux";

export default function Critical({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
      {notations?.g > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>icr = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.g} - 1</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[150px] bg-black"></div>
              </div>
              <strong>
                1 + {properties.void_ratio}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <img src={form2} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>icr = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{properties.effective_unit}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[150px] bg-black"></div>
              </div>
              <strong>
                {notations.yw}
              </strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

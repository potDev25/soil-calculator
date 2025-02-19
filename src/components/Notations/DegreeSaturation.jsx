import React from "react";
import form1 from "../../assets/images/s-1.png";
import form2 from "../../assets/images/s-2.png";
import { useSelector } from "react-redux";

export default function DegreeSaturation({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
      {notations?.mc > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[120px] h-[100]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>s = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.g} x {notations?.mc}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>{properties.void_ratio}</strong>
            </div>
          </div>
        </div>
      ) : null}

      {notations?.ym > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form2} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>s = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.ym}(1 + {properties.void_ratio}) - {notations?.g}({notations.yw})
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[150px] bg-black"></div>
              </div>
              <strong>{properties.void_ratio}({notations.yw})</strong>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

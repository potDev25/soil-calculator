import React from "react";
import form1 from "../../assets/images/ym-1.png";
import form2 from "../../assets/images/ym-2.png";
import { useSelector } from "react-redux";

export default function BulkUnit({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
      {notations?.s > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[155px] h-[90px]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>ym = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.g} + {notations?.s}({properties.void_ratio})</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>1 + {properties.void_ratio}</strong>
            </div>
            <strong>{notations?.yw}</strong>
          </div>
        </div>
      ) : null}

      {notations?.mc > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form2} alt="" className="w-[155px] h-[90px]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>ym = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.g} + {notations?.g}({notations.mc})</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>1 + {properties.void_ratio}</strong>
            </div>
            <strong>{notations?.yw}</strong>
          </div>
        </div>
      ) : null}
    </div>
  );
}

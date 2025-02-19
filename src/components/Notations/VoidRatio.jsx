import React from "react";
import form1 from "../../assets/images/e-1.png";
import form2 from "../../assets/images/e-2.png";
import form3 from "../../assets/images/e-3.png";
import form4 from "../../assets/images/e-4.png";
import form5 from "../../assets/images/e-5.png";
import form6 from "../../assets/images/e-6.png";
import { useSelector } from "react-redux";

export default function VoidRatio({ notations }) {
  const properties = useSelector((state) => state.calculator.properties);
  return (
    <div>
      {notations?.n > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form1} alt="" className="w-[120px] h-[100]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>e = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.n}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>1 - {notations?.n}</strong>
            </div>
          </div>
        </div>
      ) : null}

      {notations?.s > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form2} alt="" className="w-[120px] h-[100]" />

          <div className="mb-2 flex items-center justify-center gap-2">
            <strong>e = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.g} x {properties.moisture_saturation}
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>{properties.saturation}</strong>
            </div>
          </div>
        </div>
      ) : null}

      {notations?.ym > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form3} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>e = {notations.yw}</strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.g} + {properties.moisture_saturation}
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>{properties.bulk_unit}</strong>
            </div>
            <strong>-1</strong>
          </div>
        </div>
      ) : null}

      {notations?.yd > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form4} alt="" className="w-[200px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>e = {notations.yw}</strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>{notations?.g}</strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[50px] bg-black"></div>
              </div>
              <strong>{notations?.yd}</strong>
            </div>
            <strong>-1</strong>
          </div>
        </div>
      ) : null}

      {notations?.ysat > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form5} alt="" className="w-[150px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>e = </strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.g}({notations?.yw}) - {notations?.ysat}
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[100px] bg-black"></div>
              </div>
              <strong>
                {notations?.ysat} - {notations.yw}
              </strong>
            </div>
          </div>
        </div>
      ) : null}

      {notations?.yb > 0 ? (
        <div className="flex items-center justify-center gap-4">
          <img src={form6} alt="" className="w-[150px] h-[120]" />

          <div className="flex items-center justify-center gap-2">
            <strong>e = {notations.yw}</strong>
            <div className="flex items-center justify-center  flex-col">
              <strong>
                {notations?.g} - 1
              </strong>
              <div className="flex items-center justify-center gap-4 mb-2 mt-2">
                <div className="h-[1px] w-[50px] bg-black"></div>
              </div>
              <strong>
                {notations?.yb}
              </strong>
            </div>
            <strong>-1</strong>
          </div>
        </div>
      ) : null}
    </div>
  );
}

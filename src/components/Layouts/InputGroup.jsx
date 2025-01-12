import React, { useEffect, useState } from "react";
import CInput from "../CInput";
import CSelect from "../CSelect";

export default function InputGroup({ notations, setNotations, setUnit }) {
  useEffect(() => {
    if (notations.yw == 9.81) {
      setUnit("si");
    } else {
      setUnit("english");
    }
  }, [notations.yw]);
  return (
    <div>
      <CInput
        labelText={
          <>
            <em className="lowercase">(e)</em> Void Ratio
          </>
        }
        placeholder="Enter Void Ratio"
        onChange={(ev) => setNotations({ ...notations, e: ev.target.value })}
        value={notations.e}
      />
      <CInput
        labelText={
          <>
            <em className="lowercase">(n)</em> Porosity
          </>
        }
        placeholder="Enter Porosity"
        onChange={(e) => setNotations({ ...notations, n: e.target.value })}
        value={notations.n}
      />
      <CInput
        labelText={
          <>
            <em className="">
              (M<span className=" lowercase">c</span>)
            </em>{" "}
            Moisture Content
          </>
        }
        onChange={(e) => setNotations({ ...notations, mc: e.target.value })}
        placeholder="Enter Moisture Content"
        value={notations.mc}
      />
      <CInput
        labelText={
          <>
            <em className="lowercase">(G)</em> Gravity of Solids
          </>
        }
        placeholder="Enter Moisture Content"
        onChange={(e) => setNotations({ ...notations, g: e.target.value })}
        value={notations.g}
      />
      <CInput
        labelText={
          <>
            <em className="lowercase">(S)</em> Degree of Saturation
          </>
        }
        placeholder="Enter Moisture Content"
        onChange={(e) => setNotations({ ...notations, s: e.target.value })}
        value={notations.s}
      />
      <CSelect
        labelText={
          <>
            <em className="">
              (Y<span className=" lowercase">w</span>)
            </em>{" "}
            Weight of Water
          </>
        }
        value={notations.yw}
        placeholder="Enter Value One"
        handleChange={(e) => setNotations({ ...notations, yw: e })}
      />
    </div>
  );
}

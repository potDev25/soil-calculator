import React, { useEffect, useState } from "react";
import CInput from "../CInput";
import CSelect from "../CSelect";
import DropDown from "./DropDown";
import DropDownFind from "./DropDownFind";

export default function InputGroup({ notations, setNotations, setUnit }) {
  const [given, setGiven] = useState({
    void_ratio: false,
    porosity: false,
    moisture_content: false,
    gravity: false,
    degree_saturation: false,
    weight_water: false,
    dry_unit: false,
    saturated_unit: false,
    effective_unit: false,
  });

  useEffect(() => {
    if (notations.yw == 9.81) {
      setUnit("si");
    } else {
      setUnit("english");
    }
  }, [notations.yw]);
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
      <DropDown
        setGiven={setGiven}
        given={given}
      />
      </div>

      {given.void_ratio ? (
        <>
          <CInput
            labelText={
              <>
                <em className="lowercase">(e)</em> Void Ratio
              </>
            }
            placeholder="Enter Void Ratio"
            onChange={(ev) =>
              setNotations({ ...notations, e: ev.target.value })
            }
            value={notations.e}
          />
        </>
      ) : null}

      {given.porosity ? (
        <>
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
        </>
      ) : null}

      {given.moisture_content ? (
        <>
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
        </>
      ) : null}

      {given.gravity ? (
        <>
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
        </>
      ) : null}

      {given.degree_saturation ? (
        <>
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
        </>
      ) : null}

      {given.weight_water ? (
        <>
          <CInput
            labelText={
              <>
                <em className="">
                  (Y<span className=" lowercase">m</span>)
                </em>{" "}
                Weight of Water
              </>
            }
            placeholder="Enter Moisture Content"
            onChange={(e) => setNotations({ ...notations, ym: e.target.value })}
            value={notations.ym}
          />
        </>
      ) : null}

      {given.dry_unit ? (
        <>
          <CInput
            labelText={
              <>
                <em className="">
                  (Y<span className=" lowercase">d</span>)
                </em>{" "}
                Dry Unit Weight
              </>
            }
            placeholder="Enter Moisture Content"
            onChange={(e) => setNotations({ ...notations, yd: e.target.value })}
            value={notations.yd}
          />
        </>
      ) : null}

      {given.saturated_unit ? (
        <>
          <CInput
            labelText={
              <>
                <em className="">
                  (Y<span className=" lowercase">sat</span>)
                </em>{" "}
                Saturated Unit Weight
              </>
            }
            placeholder="Enter Saturated Unit Weight"
            onChange={(e) =>
              setNotations({ ...notations, ysat: e.target.value })
            }
            value={notations.ysat}
          />
        </>
      ) : null}

      {given.effective_unit ? (
        <>
          <CInput
            labelText={
              <>
                <em className="">
                  (Y<span className=" lowercase">b</span>)
                </em>{" "}
                Effective Unit Weight
              </>
            }
            placeholder="Enter Effective Unit Weight"
            onChange={(e) => setNotations({ ...notations, yb: e.target.value })}
            value={notations.yb}
          />
        </>
      ) : null}

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

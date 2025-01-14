import { useState } from "react";
import CCard from "./components/CCard";
import Buttons from "./components/Layouts/Buttons";
import InputGroup from "./components/Layouts/InputGroup";
import { useSelector } from "react-redux";

function App() {
  const properties = useSelector((state) => state.calculator.properties);
  const loader = useSelector((state) => state.loader.properties);
  const [loading, setLoading] = useState(false);
  const [notations, setNotations] = useState({
    e: 0,
    n: 0,
    mc: 0,
    g: 0,
    yw: 9.81,
    s: 0,
  });
  const si_unit = (
    <>
      kN/m<sup>3</sup>
    </>
  );
  const english_unit = (
    <>
      lb/m<sup>3</sup>
    </>
  );
  const [unit, setUnit] = useState("si");
  return (
    <div>
      <div
        className="bg-blue-500 text-white w-full text-lg px-3 py-2 uppercase"
        id="title"
      >
        Soil Properties Calculator
      </div>
      <div className="p-3">
        <div className="h-full w-full">
          <div className="mb-5">
            <InputGroup
              notations={notations}
              setNotations={setNotations}
              setUnit={setUnit}
            />
            <Buttons
              setLoading={setLoading}
              notations={notations}
              setNotations={setNotations}
            />
          </div>

          {loading ? <div className="flex items-center justify-center mt-16 mb-10">
            <div className="spinner"></div>
          </div> : null}

          <div
            className={`transition-opacity duration-700 ease-in-out ${
              loader.container_load ? "opacity-100" : "opacity-0"
            }`}
          >
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(e)</em> Void Ratio
                </>
              }
              value={properties.void_ratio}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(n)</em> Porosity
                </>
              }
              value={properties.porosity}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(S)</em> Degree of
                  Saturation
                </>
              }
              value={properties.saturation}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">
                    (M<span className="bg-blue-500 lowercase">c</span>)
                  </em>{" "}
                  Moisture Content
                </>
              }
              value={properties.moisture_saturation}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">
                    (Y<span className="bg-blue-500 lowercase">m</span>)
                  </em>{" "}
                  Bulk Unit Weight
                </>
              }
              value={
                <>
                  {properties.bulk_unit} {unit == "si" ? si_unit : english_unit}
                </>
              }
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">
                    (Y<span className="bg-blue-500 lowercase">d</span>)
                  </em>{" "}
                  Dry Unit Weight
                </>
              }
              value={
                <>
                  {properties.dry_unit} {unit == "si" ? si_unit : english_unit}
                </>
              }
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">
                    (Y<span className="bg-blue-500 lowercase">sat</span>)
                  </em>{" "}
                  Saturated Unit Weight
                </>
              }
              value={
                <>
                  {properties.saturated_unit}{" "}
                  {unit == "si" ? si_unit : english_unit}
                </>
              }
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">
                    (Y<span className="bg-blue-500 lowercase">b</span>)
                  </em>{" "}
                  Effective Unit Weight
                </>
              }
              value={
                <>
                  {properties.effective_unit}{" "}
                  {unit == "si" ? si_unit : english_unit}
                </>
              }
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">
                    (i<span className="bg-blue-500 lowercase">cr</span>)
                  </em>{" "}
                  Crtical hydrolic gradient
                </>
              }
              value={properties.critical}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

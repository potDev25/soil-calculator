import { useState } from "react";
import CCard from "./components/CCard";
import Buttons from "./components/Layouts/Buttons";
import InputGroup from "./components/Layouts/InputGroup";
import { useSelector } from "react-redux";
import VoidRatio from "./components/Notations/VoidRatio";

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
    ym: 0,
    yd: 0,
    ysat: 0,
    yb: 0,
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

          {loading ? (
            <div className="flex items-center justify-center mt-16 mb-10">
              <div className="spinner"></div>
            </div>
          ) : null}

          <div
            className={`transition-opacity duration-700 ease-in-out ${
              loader.container_load ? "opacity-100" : "opacity-0"
            }`}
          >
            {notations.e == 0 ? (
              <>
                <CCard
                  title={
                    <>
                      <em className="bg-blue-500 lowercase">(e)</em> Void Ratio
                    </>
                  }
                  value={properties.void_ratio}
                  with_sol={notations.e == 0 ? true : false}
                  numerator={properties.porosity}
                  denuminator={`1 - ${properties.porosity}`}
                  numerator_text="n"
                  denuminator_text="1 - n"
                  components={<VoidRatio notations={notations}/>}
                />
              </>
            ) : null}
            {notations.n == 0 ? (
              <>
                <CCard
                  title={
                    <>
                      <em className="bg-blue-500 lowercase">(n)</em> Porosity
                    </>
                  }
                  value={properties.porosity}
                  with_sol={notations.n == 0 ? true : false}
                  numerator={properties.void_ratio}
                  denuminator={`1 + ${properties.void_ratio}`}
                  numerator_text="e"
                  denuminator_text="1 + e"
                />
              </>
            ) : null}
            {notations.s == 0 ? (
              <>
                <CCard
                  title={
                    <>
                      <em className="bg-blue-500 lowercase">(S)</em> Degree of
                      Saturation
                    </>
                  }
                  value={properties.saturation}
                  with_sol={notations.s == 0 ? true : false}
                  numerator={`${notations.g}(${properties.moisture_saturation})`}
                  denuminator={`${properties.void_ratio}`}
                  numerator_text="GMC"
                  denuminator_text="e"
                />
              </>
            ) : null}
            {notations.mc == 0 ? (
              <>
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
                  with_sol={notations.mc == 0 ? true : false}
                  numerator={`${properties.saturation}(${properties.void_ratio})`}
                  denuminator={`${notations.g}`}
                  numerator_text="Se"
                  denuminator_text="G"
                />
              </>
            ) : null}
            {notations.ym == 0 ? (
              <>
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
                      {properties.bulk_unit}{" "}
                      {unit == "si" ? si_unit : english_unit}
                    </>
                  }
                  with_sol={notations.ym == 0 ? true : false}
                  numerator={`${notations.g} + (${notations.g})(${properties.moisture_saturation})`}
                  denuminator={`1 + ${properties.void_ratio}`}
                  right_num={notations.yw ?? 9.81}
                  numerator_text="G + Se"
                  denuminator_text="1 + e"
                  right_num_text="Yw"
                />
              </>
            ) : null}
            {notations.yd == 0 ? (
              <>
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
                      {properties.dry_unit}{" "}
                      {unit == "si" ? si_unit : english_unit}
                    </>
                  }
                  with_sol={notations.yd == 0 ? true : false}
                  numerator={`${notations.g}`}
                  denuminator={`1 + ${properties.void_ratio}`}
                  right_num={notations.yw}
                  numerator_text="G"
                  denuminator_text="1 + e"
                  right_num_text="Yw"
                />
              </>
            ) : null}
            {notations.ysat == 0 ? (
              <>
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
                  with_sol={notations.ysat == 0 ? true : false}
                  numerator={`${notations.g} + ${properties.void_ratio}`}
                  denuminator={`1 + ${properties.void_ratio}`}
                  right_num={notations.yw}
                  numerator_text="G + e"
                  denuminator_text="1 + e"
                  right_num_text="Yw"
                />
              </>
            ) : null}
            {notations.yb == 0 ? (
              <>
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
                  with_sol={notations.yb == 0 ? true : false}
                  numerator={`${notations.g} - 1`}
                  denuminator={`1 + ${properties.void_ratio}`}
                  right_num={notations.yw}
                  numerator_text="G - 1"
                  denuminator_text="1 + e"
                  right_num_text="Yw"
                />
              </>
            ) : null}
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
              with_sol={true}
              numerator={`${notations.g} - 1`}
              denuminator={`1 + ${properties.void_ratio}`}
              numerator_text="G - 1"
              denuminator_text="1 + e"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

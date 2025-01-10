import CCard from "./components/CCard";
import Buttons from "./components/Layouts/Buttons";
import InputGroup from "./components/Layouts/InputGroup";
import { useSelector } from "react-redux";

function App() {
  const properties = useSelector((state) => state.calculator.properties);
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
            <InputGroup />
            <Buttons />
          </div>

          <div>
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(e)</em> Void Ratio
                </>
              }
              value={properties.propsOne}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(n)</em> Porosity
                </>
              }
              value={properties.propsTwo}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500 lowercase">(S)</em> Degree of Saturation
                </>
              }
              value={properties.propsThree}
            />
            <CCard
              title={
                <>
                  <em className="bg-blue-500">(M<span className="bg-blue-500 lowercase">c</span>)</em> Moisture Content
                </>
              }
              value={properties.propsFour}
            />
            <CCard title="Property Five" value={properties.propsFive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

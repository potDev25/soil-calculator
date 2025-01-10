import CCard from "./components/CCard";
import Buttons from "./components/Layouts/Buttons";
import InputGroup from "./components/Layouts/InputGroup";
import {useSelector} from 'react-redux'

function App() {
  const properties = useSelector((state) => state.calculator.properties)
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
            <InputGroup/>
            <Buttons/>
          </div>

          <div>
            <CCard title="Property One" value={properties.propsOne} />
            <CCard title="Property Two" value={properties.propsTwo} />
            <CCard title="Property Three" value={properties.propsThree} />
            <CCard title="Property Four" value={properties.propsFour} />
            <CCard title="Property Five" value={properties.propsFive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

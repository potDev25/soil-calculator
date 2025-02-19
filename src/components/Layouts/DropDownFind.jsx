import React from "react";

export default function DropDownFind({setGiven, given}) {
  return (
    <div className="flex items-center justify-center">
      <details className="dropdown">
        <summary
          tabIndex={0}
          role="button"
          className="btn m-1 bg-blue-500 text-white uppercase"
        >
          Find
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li className={`mb-2 ${given?.void_ratio ? 'bg-green-300 text-green-500 rounded-md' : ''}`}>
            <a
              onClick={() =>
                setGiven({ ...given, void_ratio: !given.void_ratio })
              }
              className={`${given?.void_ratio ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Void Ratio
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, porosity: !given.porosity })}
              className={`${given.porosity ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Porosity
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, moisture_content: !given.moisture_content })}
              className={`${given.moisture_content ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Moisture Content
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, gravity: !given.gravity })}
              className={`${given.gravity ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Specific Gravity of Soils
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, degree_saturation: !given.degree_saturation })}
              className={`${given.degree_saturation ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Degree of Saturation
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, weight_water: !given.weight_water })}
              className={`${given.weight_water ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Unit Weight of Soil Mass
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, dry_unit: !given.dry_unit })}
              className={`${given.dry_unit ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Dry Unit Weight
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, saturated_unit: !given.saturated_unit })}
              className={`${given.saturated_unit ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Saturated Unit Weight
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, effective_unit: !given.effective_unit })}
              className={`${given.effective_unit ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Effective Unit Weight
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={() => setGiven({ ...given, critical: !given.critical })}
              className={`${given.critical ? 'bg-green-300 text-green-600 rounded-md' : ''}`}
            >
              Critical Hydrolic Gradient
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
}

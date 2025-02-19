import { createSlice } from "@reduxjs/toolkit";

function getDefaultValue(state, given) {
  let value = 0;

  if (given > 0) {
    value = given;
  } else {
    value = state;
  }

  return value;
}

const initialState = {
  properties: {
    void_ratio: 0,
    saturation: 0,
    moisture_saturation: 0,
    bulk_unit: 0,
    dry_unit: 0,
    saturated_unit: 0,
    effective_unit: 0,
    critical: 0,
    porosity: 0,
  },
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setVoidRation: (state, action) => {
      const { n, e, s, mc, ym, yd, ysat, yb, g, yw } = action.payload;
      let porosity = getDefaultValue(state.properties.porosity, n);
      let moisture_conent = getDefaultValue(
        state.properties.moisture_saturation,
        mc
      );
      let degree_of_saturation = getDefaultValue(
        state.properties.moisture_saturation,
        s
      );
      let bulk_unit_weight = getDefaultValue(state.properties.bulk_unit, ym);
      let dry_unit = getDefaultValue(state.properties.dry_unit, yd);
      let saturated_unit = getDefaultValue(
        state.properties.saturated_unit,
        ysat
      );
      let effective_unit = getDefaultValue(state.properties.effective_unit, yb);

      if (e == 0) {
        if (n > 0) {
          const onePlusN = 1 - porosity;
          const result = porosity / onePlusN;
          state.properties.void_ratio = result.toFixed(3);
        } else if (s > 0) {
          console.log("s is given");
          const numerator = Number(g) * Number(moisture_conent);
          const result = numerator / Number(degree_of_saturation);
          state.properties.void_ratio = result.toFixed(3);
        } else if (ym > 0) {
          console.log("ym is given");
          const result =
            Number(yw) *
              ((Number(g) + Number(g) * Number(moisture_conent)) /
                Number(bulk_unit_weight)) -
            1;
          console.log(result.toFixed(3));
          state.properties.void_ratio = result.toFixed(3);
        } else if (yd > 0) {
          console.log("yd is given");
          const numerator = Number(g) / Number(dry_unit);
          const result = Number(yw) * numerator - 1;
          state.properties.void_ratio = result.toFixed(3);
        } else if (ysat > 0) {
          console.log("ysat is given");
          const numerator = Number(g) * Number(yw) - Number(saturated_unit);
          const denominator = Number(saturated_unit) - Number(yw);
          const result = numerator / denominator;
          state.properties.void_ratio = result.toFixed(3);
        } else if (yb > 0) {
          console.log("yb is given");
          const numerator = Number(g) - 1;
          const cal_a = numerator / Number(effective_unit);
          const cal_b = Number(yw) * cal_a;
          const result = cal_b - 1;
          state.properties.void_ratio = result.toFixed(3);
        }
      } else {
        state.properties.void_ratio = e;
      }
    },

    setPorosity: (state, action) => {
      const { n } = action.payload;
      const e = state.properties.void_ratio;
      if (n == 0) {
        const denominator = 1 + Number(e);
        const result = Number(e) / denominator;
        state.properties.porosity = result.toFixed(3);
      } else {
        state.properties.porosity = n;
      }
    },

    setDegreeOfSaturation: (state, action) => {
      const { s, g, mc, e, ym, yw } = action.payload;
      let void_ratio = getDefaultValue(state.properties.void_ratio, e);
      let bulk_unit_weight = getDefaultValue(state.properties.bulk_unit, ym);
      let moisture_conent = getDefaultValue(
        state.properties.moisture_saturation,
        mc
      );

      if (s == 0) {
        if (mc > 0) {
          console.log("MC is given");
          const numerator = Number(g) * Number(moisture_conent);
          const result = numerator / Number(void_ratio);
          state.properties.saturation = isNaN(result) ? 0.0 : result.toFixed(3);
        } else if (ym > 0) {
          const cal_a = 1 + Number(void_ratio);
          const cal_b = Number(bulk_unit_weight) * cal_a;
          const cal_c = Number(g) * Number(yw);
          const numerator = cal_b - cal_c;
          const denominator = void_ratio * Number(yw);
          const result = numerator / denominator;
          state.properties.saturation = result.toFixed(3);
        }
      } else {
        state.properties.saturation = s;
      }
    },

    setMoistureContent: (state, action) => {
      const { s, mc, g } = action.payload;
      if (mc == 0) {
        const divisor = Number(s) * state.properties.void_ratio;
        const divider = Number(g);
        const result = divisor / divider;
        state.properties.moisture_saturation = isNaN(result)
          ? 0
          : result.toFixed(3);
      } else {
        state.properties.moisture_saturation = mc;
      }
    },

    setBulkUnit: (state, action) => {
      const { g, yw, ym, s, mc, e } = action.payload;
      const { moisture_saturation, void_ratio } = state.properties;
      const unitWeightWater = Number(yw); // Default γw
      let void_ratio_a = getDefaultValue(state.properties.void_ratio, e)
      let moisture_conent = getDefaultValue(state.properties.moisture_saturation, mc)

      if (ym == 0) {
        if(s > 0){
          const GMC = Number(g) * moisture_saturation;
  
          // Bulk Unit Weight Formula: ((Gs + GMC) * γw) / (1 + e)
          const numerator = (Number(g) + Number(GMC)) * unitWeightWater;
          const denominator = 1 + Number(void_ratio);
  
          const bulkUnitWeight = numerator / denominator;
  
          // Update the state
          state.properties.bulk_unit = isNaN(bulkUnitWeight)
            ? 0.0
            : bulkUnitWeight.toFixed(3);
        }else if(mc > 0){
          const numerator = Number(g) + (Number(g) * Number(mc))
          const denominator = 1 + Number(void_ratio_a)
          const tem_res = numerator / denominator
          const result = tem_res * Number(yw)
          state.properties.bulk_unit = result.toFixed(3)
        }
      } else {
        state.properties.bulk_unit = ym;
      }
      // Calculate Gravimetric Moisture Content (GMC)
    },

    setDryUnit: (state, action) => {
      const { g, yw, yd, ym, mc } = action.payload;
      const { void_ratio } = state.properties;
      const moisture_conent = getDefaultValue(state.properties.moisture_saturation, mc)

      if(yd == 0){
        if(g > 0){
          const numerator = Number(g) * Number(yw);
          const denominator = 1 + Number(void_ratio);
          const dry_unit = numerator / denominator;
          state.properties.dry_unit = dry_unit.toFixed(3);
        }else if(ym > 0){
          const cal_a = 1 + Number(moisture_conent)
          console.log(cal_a);
          const result = Number(ym) / cal_a
          state.properties.dry_unit = result.toFixed(3)
        }
      }else{
        state.properties.dry_unit = yd;
      }

    },

    setSaturatedUnit: (state, action) => {
      const { g, yw, ysat, yb } = action.payload;
      const { void_ratio } = state.properties;

      if(ysat == 0){
          const GE = Number(g) + Number(void_ratio);
          const numerator = GE * Number(yw);
          const denominator = 1 + Number(void_ratio);
  
          const result = numerator / denominator;
          state.properties.saturated_unit = isNaN(result) ? 0.0 : result.toFixed(3);
        
      }else{
        state.properties.effective_unit = ysat
      }
    },

    setEffective: (state, action) => {
      const { g, yw, yb, ysat } = action.payload;
      const { void_ratio } = state.properties;

      if(yb == 0){
        if(ysat > 0){
          const result = Number(ysat) - Number(yw)
          state.properties.effective_unit = result.toFixed(3)
        }else{
          const GMinus = Number(g) - 1;
          const numerator = GMinus * Number(yw);
          const denominator = 1 + Number(void_ratio);
          const result = numerator / denominator;
          state.properties.effective_unit = isNaN(result) ? 0.0 : result.toFixed(3);
        }
      }else{
        state.properties.effective_unit = yb
      }

    },

    setCritical: (state, action) => {
      const { g, yw, yb } = action.payload;
      const { void_ratio } = state.properties;

      if(g > 0){
        const numerator = Number(g) - 1;
        const denominator = 1 + Number(void_ratio);
  
        const result = numerator / denominator;
        state.properties.critical = isNaN(result) ? 0.0 : result.toFixed(3);
      }else{
        const result = Number(yb) / Number(yw)
        state.properties.critical = result.toFixed(3)
      }

    },
    clearProps: (state, action) => {
      state.properties = {
        void_ratio: 0,
        saturation: 0,
        moisture_saturation: 0,
        bulk_unit: 0,
        dry_unit: 0,
        saturated_unit: 0,
        effective_unit: 0,
        critical: 0,
        porosity: 0,
      };
    },
  },
});

export const {
  setVoidRation,
  setDegreeOfSaturation,
  setMoistureContent,
  setBulkUnit,
  setDryUnit,
  setSaturatedUnit,
  setEffective,
  setPorosity,
  setCritical,
  clearProps,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;

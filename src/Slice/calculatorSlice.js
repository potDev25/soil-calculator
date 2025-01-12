import { createSlice } from "@reduxjs/toolkit";

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
      const { n, e } = action.payload;

      if (e == 0) {
        const onePlusN = 1 - n;
        const result = n / onePlusN;
        state.properties.void_ratio = result.toFixed(3);
      } else {
        state.properties.void_ratio = e;
      }
    },

    setPorosity: (state, action) => {
      const { n, e } = action.payload;
      if (n == 0) {
        const denominator = 1 + Number(e);
        const result = Number(e) / denominator;
        state.properties.porosity = isNaN(result) ? 0.0 : result.toFixed(3);
      } else {
        state.properties.porosity = n;
      }
    },

    setDegreeOfSaturation: (state, action) => {
      const { s, g, mc, e } = action.payload;

      if (s == 0) {
        const numerator = Number(g) * Number(mc);
        const result = numerator / Number(e);
        state.properties.saturation = isNaN(result) ? 0.0 : result.toFixed(3);
      } else {
        state.properties.saturation = s;
      }
    },

    setMoistureContent: (state, action) => {
      const { s, mc, g } = action.payload;
      if (mc == 0) {
        const divisor = s * state.properties.void_ratio;
        const divider = g;
        const result = divisor / divider;
        state.properties.moisture_saturation = isNaN(result)
          ? 0
          : result.toFixed(3);
      } else {
        state.properties.moisture_saturation = mc;
      }
    },

    setBulkUnit: (state, action) => {
      const { g, yw } = action.payload;
      const { moisture_saturation, void_ratio } = state.properties;
      const unitWeightWater = Number(yw); // Default γw

      // Calculate Gravimetric Moisture Content (GMC)
      const GMC = Number(g) * moisture_saturation;

      // Bulk Unit Weight Formula: ((Gs + GMC) * γw) / (1 + e)
      const numerator = (Number(g) + Number(GMC)) * unitWeightWater;
      const denominator = 1 + Number(void_ratio);

      const bulkUnitWeight = numerator / denominator;

      // Update the state
      state.properties.bulk_unit = isNaN(bulkUnitWeight)
        ? 0.0
        : bulkUnitWeight.toFixed(3);
    },

    setDryUnit: (state, action) => {
      const { g, yw } = action.payload;
      const { void_ratio } = state.properties;

      const numerator = Number(g) * Number(yw);
      const denominator = 1 + Number(void_ratio);
      const dry_unit = numerator / denominator;
      state.properties.dry_unit = dry_unit.toFixed(3);
    },

    setSaturatedUnit: (state, action) => {
      const { g, yw } = action.payload;
      const { void_ratio } = state.properties;
      const GE = Number(g) + Number(void_ratio);
      const numerator = GE * Number(yw);
      const denominator = 1 + Number(void_ratio);

      const result = numerator / denominator;
      state.properties.saturated_unit = isNaN(result) ? 0.0 : result.toFixed(3);
    },

    setEffective: (state, action) => {
      const { g, yw } = action.payload;
      const { void_ratio } = state.properties;

      const GMinus = Number(g) - 1;
      const numerator = GMinus * Number(yw);
      const denominator = 1 + Number(void_ratio);
      const result = numerator / denominator;
      state.properties.effective_unit = isNaN(result) ? 0.0 : result.toFixed(3);
    },

    setCritical: (state, action) => {
      const { g, yw } = action.payload;
      const { void_ratio } = state.properties;

      const numerator = Number(g) - 1;
      const denominator = 1 + Number(void_ratio);

      const result = numerator / denominator;
      state.properties.critical = isNaN(result) ? 0.0 : result.toFixed(3);
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: {
    propsOne: 0,
    propsTwo: 0,
    propsThree: 0,
    propsFour: 0,
    propsFive: 0,
  },
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calPropsOne: (state, action) => {
      console.log("props one calculator");
      state.properties.propsOne++;
    },
    calPropsTwo: (state, action) => {
      console.log("props two calculator");
    },
    calPropsThree: (state, action) => {
      console.log("props three calculator");
    },
    calPropsFour: (state, action) => {
      console.log("props four calculator");
    },
    calPropsFIve: (state, action) => {
      console.log("props four calculator");
    },
    clearProps: (state, action) => {
        state.properties = {
            propsOne: 0,
            propsTwo: 0,
            propsThree: 0,
            propsFour: 0,
            propsFive: 0,
          };
    },
  },
});

export const { calPropsOne, calPropsTwo, calPropsThree, calPropsFour, clearProps } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;

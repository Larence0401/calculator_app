import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { number: 0, CalculationShown: true },
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    displayInput: (state, action) => {
      state.value.number = action.payload;
    },
    showCalculation: (state, action) => {
      state.value.CalculationShown = action.payload;
    },
  },
});

export const { displayInput, showCalculation } = displaySlice.actions;

export default displaySlice.reducer;

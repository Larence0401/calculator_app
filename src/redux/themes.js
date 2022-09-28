import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.value === 3) {
        state.value = 1;
      } else {
        state.value += 1;
      }
    }
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

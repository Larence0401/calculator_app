import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator";
import displayReducer from "./display";
import themeReducer from "./themes";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    display: displayReducer,
    theme: themeReducer
  },
});

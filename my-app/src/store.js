import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurs/counter";

export const store = configureStore({
  reducer: counterReducer,
});

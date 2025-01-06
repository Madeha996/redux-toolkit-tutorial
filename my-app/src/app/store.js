import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featurs/counter";
import postReducer from "../featurs/Post";

export const store = configureStore({
  // reducer: counterReducer,
  reducer: postReducer,
});

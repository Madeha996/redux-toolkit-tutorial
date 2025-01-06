import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featurs/counter";
import postReducer from "../featurs/post";
import usersReducer from "../featurs/users";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    posts: postReducer,
    users: usersReducer,
  },
});

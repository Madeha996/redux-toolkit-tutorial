import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "first user" },
  { id: 1, name: "second user" },
];

export const usersSliecer = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.users;
export default usersSliecer.reducer;

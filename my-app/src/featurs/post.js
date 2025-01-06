import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "title",
    author: "author",
    content: "content",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.post.push(action.payload);
    //   },
    //   prepare(title, author, content) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         author,
    //         content,
    //       },
    //     };
    //   },
    // },
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { postAdded } = postSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;

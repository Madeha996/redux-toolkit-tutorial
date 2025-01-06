import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { postAdded } from "../featurs/post";
import PostList from "./PostList";

const Post = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    id: "",
    title: "",
    auther: "",
    content: "",
  });

  const isDisabled =
    values.title === "" || values.auther === "" || values.content === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ id: "", title: "", auther: "", content: "" });
  };

  return (
    <section>
      <main>
        <h1>Add A New Post</h1>

        {/* Start Form */}
        <form onSubmit={handleSubmit}>
          <label>Post Title :</label>
          <input
            type="text"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />

          <label>Auther :</label>
          <input
            type="text"
            value={values.auther}
            onChange={(e) => setValues({ ...values, auther: e.target.value })}
          />

          <label>content :</label>
          <textarea
            type="text"
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
          />

          <button
            disabled={isDisabled}
            style={{ background: isDisabled ? "gray" : "pink" }}
            type="submit"
            onClick={() => dispatch(postAdded(values))}
          >
            Save Post
          </button>
        </form>
        {/*== End Form ==*/}

        {/* Start Posts */}
        <PostList />
        {/*== End Posts ==*/}
      </main>
    </section>
  );
};

export default Post;

import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../featurs/post";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h1>{post.title}</h1>
        <h3>{post.content}</h3>
        <p>{post.auther}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;

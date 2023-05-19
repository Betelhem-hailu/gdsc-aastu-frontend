import React from "react";
import { posts } from "../utils/Data";

function Blogs() {
  const postList = posts.map((post) => <li key={post.id}>{post.title}</li>);
  return (
    // <div>
    <ul type="none">{postList}</ul>
    //   {posts.map((post) => (
    //     <div>
    //       <h1>{post.title}</h1>
    //       <p>{post.description}</p>
    //       <p>{post.date}</p>
    //     </div>
    //   ))}
    // </div>
    
  );
}

export default Blogs;

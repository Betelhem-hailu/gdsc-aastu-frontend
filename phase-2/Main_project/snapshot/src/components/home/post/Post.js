import React from "react";
import { BsDownload, BsEye} from "react-icons/bs";
import "./post.css";
import { posts } from "../../../utils/Data";

const Post = () => {
  return (
    <div className="snapshot__posts page__form">
      <div className="snapshot__posts-images__container">
      {posts.map(({ image }) => (
        <div className="snapshot__posts-image__card">
            <img src={image} alt="post" />
            <div className="icons">
            <BsDownload className="posts-images icon-down"/>
            <BsEye className="posts-images icon-eye"/>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

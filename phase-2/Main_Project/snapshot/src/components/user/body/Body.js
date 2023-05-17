import React from "react";
import "./body.css";
import images from "../../../utils/images";
import { users, posts } from "../../../utils/Data";
import Login from "../login/Login";

const Profile = () => (
  <div className="snapshot__user-profile">
        <div className="user-picture">
          <img src={images.prof1} alt="profile_picture" />
        </div>
        <div className="snapshot__content">
          <div className="content__column-label">
            <p className="p__serfi">user name</p>
            <p className="p__serfi">password</p>
            <p className="p__serfi">confrim password</p>
          </div>

          {users.map(({ username, password }) => (
            <div className="content__column-input">
              <input
                type="text"
                placeholder={username}
                disabled
                className="input-text_display"
              />
              <input
                type="text"
                placeholder={password}
                disabled
                className="input-text_display"
              />
              <input type="text" disabled className="input-text_display" />
            </div>
          ))}
        </div>
        </div>
)

const Collection = () =>(
  <div className="snapshot__user-collection">
        <div className="snapshot__user-collection__container">
          {posts.map(({ image }) => (
            <div className="snapshot__user-collection__card">
              <img src={image} alt="post" />
            </div>
          ))}
        </div>
      </div>
)



const Body = () => {
  return (
    <div className="snapshot__user page__form">
      <Collection />
    </div>
  );
};

export default Body;

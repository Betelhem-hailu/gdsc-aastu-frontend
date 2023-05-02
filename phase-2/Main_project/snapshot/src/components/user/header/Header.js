import React from "react";
import "./header.css";
import images from "../../../utils/images";
import { Title } from "../../index"

const Header = () => {
  return (
    <div className="snapshot__user page__form ">
      <div className="snapshot__user-title">
      <Title title={"Collection"}/>
        <div className="snapshot__user-picture">
          <img src={images.prof1} alt="user_picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;

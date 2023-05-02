import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [navState, setnavState] = useState(false);

  function handleFilter(){
    setnavState(navState => !navState);
    console.log(navCheck);
  }

  let navCheck = navState ? ' active' : '';

  return (
    <div className="snapshot__navbar page__form">
      <ul className="snapshot__navbar-links flex__center">
        <li className={`navbar_menu${navCheck}`} onClick={handleFilter}>Beach</li>
        <li className="navbar_menu">Bird</li>
        <li className="navbar_menu">Food</li>
        <li className="navbar_menu">Forest</li>
        <li className="navbar_menu">Mountain</li>
      </ul>
    </div>
  );
};

export default Navbar;

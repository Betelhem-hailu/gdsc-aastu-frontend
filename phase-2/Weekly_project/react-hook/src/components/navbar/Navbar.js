import React from "react";
import logo from '../../assets/shop.svg';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
        <img src={logo} alt="logo"/>
        </div>
        <div className="navbar-links_container">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#account">Account</a>
        </div>
        <div className="search">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

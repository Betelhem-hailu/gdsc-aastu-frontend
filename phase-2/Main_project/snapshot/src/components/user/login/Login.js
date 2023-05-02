import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="snapshot__user-login page__form ">
    <h1 className="head-text flex__center page__form">Login</h1>
      <form action="post" className="user__form">
        <div>
          <label className="p__serfi input__label">User name</label>
          <input type="text" className="input-text_display" />
        </div>
        <div>
          <label className="p__serfi input__label">password</label>
          <input type="password" className="input-text_display" />
        </div>
        <button type="button" className="snapshot-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

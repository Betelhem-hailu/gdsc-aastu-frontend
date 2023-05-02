import React, { useState } from "react";
import "./App.css";
import { Header, Body, Navbar, Post, Search, Login } from "./components";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      {isLogin ? (
        <div>
          <Header />
          <Body />
        </div>
      ) : (
        <div>
          <Search />
          <Navbar />
          <Post />
        </div>
      )}
    </div>
  );
}

export default App;

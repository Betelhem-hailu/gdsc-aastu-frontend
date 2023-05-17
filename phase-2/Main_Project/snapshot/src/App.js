import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { About, News, Login, SignUp } from "./components";
import "./App.css";
import Nav from "./components/home/Nav";

function App() {
  return (
    <Box width="400px" sx={{width: {x1: '1000px'}}} m="auto">
    <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
   </Box>
  );
}

export default App;

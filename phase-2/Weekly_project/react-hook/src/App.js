import React from "react";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";


const App = () => {
  return (
    <div className="App">
    <Navbar />
    <Products />
    </div>
  );
};

export default App;

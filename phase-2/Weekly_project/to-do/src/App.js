// Import the neccessary components
import React from "react";
import "./App.css";
import { Todo } from "./Components/Todo/Todo";
import { InputField } from "./Components/InputField/InputField";

export default function App() {
  return (
    <div>
      <h1 className="head">TODO LIST</h1>
      <div className="List">
      <InputField />
      <Todo />
      </div>
    </div>
    // Create the instances of your components here.
  );
}

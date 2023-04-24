import React, {useState} from "react";
import "./InputField.css";
import { FaPlus } from "react-icons/fa";


export const InputField = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  }
  return (
      <form className="InputField" onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="add" > <FaPlus />Add</button>
      </form>
  )
}

// Create your the component funtion and
// Don't forget to export it!

import React, { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import { InputField } from "../InputField/InputField";
import { FaTrash } from 'react-icons/fa';
uuidv4();
// Import the necessary style file here

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }
    const handleDelete = ({ id }) => {
      setTodos(todos.filter((todos) => todos.id !== id));
    };
  return (
    <div>
      <InputField addTodo={addTodo} />
      {todos.map((todo, index) => (
        <div className="Todo">
          <input type="checkbox" className="check" />
          <label className="label">
            <h3 className="title">{todo.task}</h3>
            <p className="date">April 08, 2023</p>
          </label>
          <button className="remove" onClick={()=>handleDelete( todo )}>
           <FaTrash /> Remove
          </button>
        </div>
      ))}
    </div>
  );
};

// Create your the component funtion and
// Don't forget to export it!

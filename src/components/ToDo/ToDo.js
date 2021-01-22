import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./ToDo.css";
import ToDoList from "./ToDoList";
import Form from "./Form";

const ToDo = () => {
  const [todos, setTodos] = useState([{ id: uuid(), value: "A to do item" }]);

  const handleSubmit = inputValue => {
    setTodos([...todos, { id: uuid(), value: inputValue }]);
  };

  const handleDelete = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="wrapper">
      <h2>Things to do:</h2>
      <ToDoList todos={todos} handleDelete={handleDelete} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default ToDo;

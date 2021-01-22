import { useState } from "react";
import { v4 as uuid } from "uuid";

import useToDos from "../useToDos";
import { addTodo } from "../state/actions";

const Form = () => {
  const [, dispatch] = useToDos();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ id: uuid(), value: inputValue }));
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

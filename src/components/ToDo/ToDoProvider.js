import { createContext, useReducer } from "react";

import todosReducer from "./state/todosReducer";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <ToDoContext.Provider value={[todos, dispatch]}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;

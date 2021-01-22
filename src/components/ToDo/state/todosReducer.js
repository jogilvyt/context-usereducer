import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from "./types";

const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};

export default todosReducer;

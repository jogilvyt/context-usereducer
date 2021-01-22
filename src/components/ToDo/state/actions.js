import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from "./types";

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});

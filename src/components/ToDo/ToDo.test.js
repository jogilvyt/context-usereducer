import { render, fireEvent, screen } from "@testing-library/react";

import ToDo from "./ToDo";

const addTodo = value => {
  const input = screen.getByPlaceholderText(/Add a to do/);
  fireEvent.change(input, { target: { value } });

  const button = screen.getByText(/Submit/);
  fireEvent.click(button);
};

describe("<ToDo />", () => {
  it("should render no todos and a message by default", () => {
    render(<ToDo />);
    screen.getByText(/There is nothing left to do!/);
  });

  it("should add a new todo when the form is submitted", () => {
    render(<ToDo />);

    // add a new to do and check it is rendered
    addTodo("A new to do");
    screen.getByText(/A new to do/);
    const input = screen.getByPlaceholderText(/Add a to do/);

    // check the input value is cleared
    expect(input.value).toBe("");
  });

  it("should delete a to do when the delete button is clicked", () => {
    render(<ToDo />);

    // add a new to do and check it is rendered
    addTodo("A new to do");
    screen.getByText(/A new to do/);

    // click on the delete button
    const deleteButton = screen.getByText(/Delete/);
    fireEvent.click(deleteButton);

    // check the to do has been removed
    expect(screen.queryByText(/A new to do/)).not.toBeInTheDocument();
  });

  it("should remove all to dos when the clear button is clicked", () => {
    render(<ToDo />);
    const todos = ["A new to do", "Another thing on the list"];
    todos.forEach(todo => {
      // add each todo and check it is rendered
      addTodo(todo);
      screen.getByText(todo);
    });

    // click on the clear button
    const clearButton = screen.getByText(/Clear to dos/);
    fireEvent.click(clearButton);

    // check all todos have been removed
    todos.forEach(todo =>
      expect(screen.queryByText(todo)).not.toBeInTheDocument()
    );
  });
});

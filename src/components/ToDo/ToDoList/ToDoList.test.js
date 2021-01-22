import { render, screen } from "@testing-library/react";

import ToDoList from "./ToDoList";
import useToDos from "../useToDos";

jest.mock("../useToDos");

const mockTodos = [
  { id: 123, value: "A new to do" },
  { id: 456, value: "Another thing on the list" },
];

describe("<ToDoList />", () => {
  beforeEach(() => {
    useToDos.mockReturnValue([mockTodos]);
  });

  it("should render the todos from the context", () => {
    render(<ToDoList />);

    // check that each of the todos is rendered
    mockTodos.forEach(({ value }) => screen.getByText(value));
  });

  it("should render message if there are no todos", () => {
    // mock todos to an empty array for this test
    useToDos.mockReturnValue([[]]);

    render(<ToDoList />);

    // check that the message is displayed as expected
    screen.getByText(/There is nothing left to do!/);
  });
});

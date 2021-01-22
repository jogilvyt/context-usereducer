import { render, fireEvent, screen } from "@testing-library/react";

import ToDoItem from "./ToDoItem";
import useToDos from "../useToDos";
import { removeTodo } from "../state/actions";

jest.mock("../useToDos");

const dispatchMock = jest.fn();

describe("<ToDoItem />", () => {
  beforeEach(() => {
    useToDos.mockReturnValue([[], dispatchMock]);
  });

  it("should dispatch removeTodo action with the correct values when remove button is clicked", () => {
    const mockTodo = { id: 123, value: "A new todo" };
    render(<ToDoItem item={mockTodo} />);

    // click on the remove button
    const removeButton = screen.getByText(/Delete/);
    fireEvent.click(removeButton);

    // check that dispatch was called with the correct values
    expect(dispatchMock).toHaveBeenCalledWith(removeTodo(mockTodo.id));
  });
});

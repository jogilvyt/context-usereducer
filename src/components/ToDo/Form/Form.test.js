import { render, fireEvent, screen } from "@testing-library/react";

import Form from "./Form";
import useToDos from "../useToDos";
import { addTodo } from "../state/actions";

jest.mock("../useToDos");

const dispatchMock = jest.fn();

describe("<Form />", () => {
  beforeEach(() => {
    useToDos.mockReturnValue([[], dispatchMock]);
  });

  it("should call dispatch with correct values when form is submitted", () => {
    render(<Form />);

    // change the input value
    const input = screen.getByPlaceholderText(/Add a to do/);
    fireEvent.change(input, { target: { value: "A new to do" } });

    // click the submit button
    const submitButton = screen.getByText(/Submit/);
    fireEvent.click(submitButton);

    // expect dispatch to have been called with the correct action and values
    expect(dispatchMock).toHaveBeenCalledWith(
      addTodo({
        id: expect.anything(),
        value: "A new to do",
      })
    );

    // check the input value has been reset
    expect(input.value).toBe("");
  });
});

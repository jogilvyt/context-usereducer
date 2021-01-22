import { render, fireEvent, screen } from "@testing-library/react";

import Header from "./Header";
import useToDos from "../useToDos";
import { clearTodos } from "../state/actions";

jest.mock("../useToDos");

const dispatchMock = jest.fn();

describe("<Header />", () => {
  beforeEach(() => {
    useToDos.mockReturnValue([[], dispatchMock]);
  });

  it("should dispatch clearTodos when clear button is clicked", () => {
    render(<Header />);

    // click on the clear button
    const button = screen.getByText(/Clear to dos/);
    fireEvent.click(button);

    // check that dispatch has been called with the correct action
    expect(dispatchMock).toHaveBeenCalledWith(clearTodos());
  });
});

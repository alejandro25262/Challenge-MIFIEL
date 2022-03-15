import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import App from "../App";

describe("App", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test("render loader on first render", () => {
    useSelectorMock.mockReturnValue({ user: {} });
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(<App />);
    const text = screen.getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});

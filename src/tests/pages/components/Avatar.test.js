import { render, screen } from "@testing-library/react";
import Avatar from "../../../pages/components/Avatar";
import * as reactRedux from "react-redux";

describe("<Avatar />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  test("render the correct inner text", () => {
    useSelectorMock.mockReturnValue({ user: { avatar: "JL" } });
    render(<Avatar />);
    const testText = "JL";
    const text = screen.getByText(testText);
    expect(text).toBeInTheDocument();
  });
});

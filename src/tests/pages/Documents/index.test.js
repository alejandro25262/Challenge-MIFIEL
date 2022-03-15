import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Document from "../../../pages/Documents";

jest.mock("react-router-dom", () => ({
  // eslint-disable-next-line
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

describe("App", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test("render filters", () => {
    useSelectorMock.mockReturnValue({
      list: {
        filters: {
          pending: false,
          signed: false,
          page: 1,
          perPage: 10,
        },
        loading: true,
        table: {
          data: [],
        },
      },
    });
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(<Document />);

    const textPending = screen.getByText("Todos");
    const textSigned = screen.getByText("Todos");
    const textAll = screen.getByText("Todos");

    expect(textPending).toBeInTheDocument();
    expect(textSigned).toBeInTheDocument();
    expect(textAll).toBeInTheDocument();
  });

  test("render table", () => {
    useSelectorMock.mockReturnValue({
      list: {
        filters: {
          pending: false,
          signed: false,
          page: 1,
          perPage: 10,
        },
        loading: true,
        table: {
          data: [],
        },
      },
    });
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(<Document />);

    const textPending = screen.getByText("Nombre del documento");

    expect(textPending).toBeInTheDocument();
  });
});

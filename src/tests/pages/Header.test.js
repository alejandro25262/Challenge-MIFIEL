import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import * as reactRedux from "react-redux";
import Header from "../../pages/Header";

describe("<Header />", () => {
  const mockStore = configureStore();
  const initialState = {
    user: { name: "Jesus", email: "a@a.com", avatar: "JL" },
  };

  test("match snapshot", () => {
    const store = mockStore(initialState);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState());

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

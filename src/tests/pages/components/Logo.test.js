import { shallow } from "enzyme";
import Logo from "../../../pages/components/Logo";

describe("<Logo />", () => {
  test("match snapshot", () => {
    const wrapper = shallow(<Logo />);
    // render logo corrently
    expect(wrapper).toMatchSnapshot();
  });
});

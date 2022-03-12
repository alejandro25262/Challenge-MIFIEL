import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/user/actions";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { loading, name, email } = user;

  useEffect(() => {
    dispatch(saveUser());
  }, []);

  return (
    <div className="w-full h-20 px-40 flex justify-between items-center border-gray-900 border-b-2">
      <Logo />
      {!loading ? (
        <div className="flex justify-center items-center">
          {`${name}(${email})`}
          <Avatar className="bg-gray-900 text-white ml-2" />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Header;
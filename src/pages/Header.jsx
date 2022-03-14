import React from "react";
import { useSelector } from "react-redux";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

const Header = () => {
  const { user } = useSelector((state) => state);
  const { loading, name, email } = user;

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

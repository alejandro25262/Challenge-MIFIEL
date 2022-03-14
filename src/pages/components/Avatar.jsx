import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Avatar = ({ className }) => {
  const { user } = useSelector((state) => state);
  const { avatar } = user;

  return (
    <div
      className={`${className} rounded-full w-10 h-10 flex justify-center items-center text-xl`}
    >
      {avatar}
    </div>
  );
};

export default Avatar;

Avatar.propTypes = {
  className: PropTypes.string,
};

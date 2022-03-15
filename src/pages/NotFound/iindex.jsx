import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen -mt-20">
      <div className="px-40 py-20 rounded-md shadow-xl bg-gray-900">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-green-500 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
            Oops! Page not found
          </h6>

          <Link
            to="/"
            className="mt-4 px-6 py-2 text-sm font-semibold bg-blue-100 hover:bg-green-500 hover:text-white"
          >
            {" "}
            Go home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux/alert/actions";

const Alert = () => {
  const { alert } = useSelector((state) => state.alert);
  const { type, message } = alert;
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // if there is an alert then we show it
    if (type) {
      ref.current.style.display = "flex";
      // hide it after 5 seconds
      setTimeout(() => {
        ref.current.style.display = "none";
        dispatch(setAlert({ type: null, message: "" }));
      }, 5000);
    }
  }, [alert]);

  if (type === "error")
    return (
      <div
        ref={ref}
        style={{ display: "none" }}
        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 fixed bottom-0 right-0"
        role="alert"
      >
        {message.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
      </div>
    );
  if (type === "success")
    return (
      <div
        ref={ref}
        style={{ display: "none" }}
        className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 fixed bottom-0 right-0"
        role="alert"
      >
        {message.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
      </div>
    );

  return null;
};

export default Alert;

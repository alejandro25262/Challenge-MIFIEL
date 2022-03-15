import { SET_ALERT } from "../actions";

export const setAlert = (alert) => {
  return {
    type: SET_ALERT,
    payload: { alert },
  };
};

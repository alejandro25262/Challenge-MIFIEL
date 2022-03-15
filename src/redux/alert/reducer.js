import { SET_ALERT } from "../actions";

const INIT_STATE = {
  alert: { type: null, message: [] },
  error: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: { ...action.payload.alert },
      };

    default:
      return { ...state };
  }
};

import {
  SAVE_USER_DATA,
  SAVE_USER_DATA_SUCCESS,
  SAVE_USER_DATA_ERROR,
} from "../actions";

const INIT_STATE = {
  user: {
    name: "",
    email: "",
    avatar: "",
    loading: true,
  },
  error: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return { ...state, user: { ...state.user, loading: true } };

    case SAVE_USER_DATA_SUCCESS:
      return { ...state, user: { ...action.payload.user, loading: false } };

    case SAVE_USER_DATA_ERROR:
      return {
        ...state,
        user: { ...state.user, loading: false },
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};

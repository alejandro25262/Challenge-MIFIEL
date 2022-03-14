import {
  SAVE_USER_DATA,
  SAVE_USER_DATA_SUCCESS,
  SAVE_USER_DATA_ERROR,
} from "../actions";

export const saveUser = () => {
  return {
    type: SAVE_USER_DATA,
  };
};

export const saveUserSuccess = (user) => {
  return {
    type: SAVE_USER_DATA_SUCCESS,
    payload: { user },
  };
};

export const saveUserError = (error) => {
  return {
    type: SAVE_USER_DATA_ERROR,
    payload: { error },
  };
};

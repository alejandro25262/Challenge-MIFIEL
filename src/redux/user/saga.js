import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getMIFIEL } from "../../API/endpoints";
import { SAVE_USER_DATA } from "../actions";
import { saveUserSuccess } from "../user/actions";

import utf8 from "utf8/utf8";

export function* getUserData() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(SAVE_USER_DATA, getUser);
}

const getUserDataApi = async () => {
  const data = await getMIFIEL(
    "https://app-sandbox.mifiel.com/api/v1/users/me"
  );
  if (data) {
    const { name, email } = data;
    const nameArray = name.split(" ");
    const avatar = `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
    const newData = { name: utf8.decode(utf8.decode(name)), email, avatar };

    return newData;
  }
  return data;
};

function* getUser() {
  try {
    const response = yield call(getUserDataApi);
    yield put(saveUserSuccess(response));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([fork(getUserData)]);
}

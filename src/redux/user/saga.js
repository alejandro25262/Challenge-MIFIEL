import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getMIFIEL } from "../../API/endpoints";
import { SAVE_USER_DATA } from "../actions";
import { saveUserSuccess } from "../user/actions";

import utf8 from "utf8/utf8";
import { USER_ME_URL } from "../../constants/apiRoutes";

export function* getUserData() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(SAVE_USER_DATA, getUser);
}

const getUserDataApi = async () => {
  const data = await getMIFIEL(USER_ME_URL);
  if (data) {
    const { name, email } = data;
    const nameArray = name.split(" ");
    // avatar is the first 2 characters
    const avatar = `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
    // decode name 2 times because it has an error
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

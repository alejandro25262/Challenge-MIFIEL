import { all } from "redux-saga/effects";
import user from "./user/saga";
import documents from "./documents/saga";

export default function* rootSaga() {
  yield all([user(), documents()]);
}

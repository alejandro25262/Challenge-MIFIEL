import { combineReducers } from "redux";
import documents from "./documents/reducer";
import user from "./user/reducer";
import alert from "./alert/reducer";

const reducers = combineReducers({
  user,
  documents,
  alert,
});

export default reducers;

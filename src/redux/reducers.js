import { combineReducers } from "redux";
import documentos from "./documentos/reducer";

const reducers = combineReducers({
  documentos,
});

export default reducers;

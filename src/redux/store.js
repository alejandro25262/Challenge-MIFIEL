import { createStore } from "redux";
import reducers from "./reducers.js";

export function configureStore(initialState) {
  const store = createStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers.js");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

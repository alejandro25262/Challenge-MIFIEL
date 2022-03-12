import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducers from "./reducers";

export function configureStore(initialState) {
  const store = createStore(reducers, initialState, devToolsEnhancer());

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

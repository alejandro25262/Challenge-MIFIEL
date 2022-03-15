import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { runSaga } from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore() {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

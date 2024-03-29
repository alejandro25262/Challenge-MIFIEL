import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

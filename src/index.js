import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//
// This is the client side entry point for the React app.
//

import React from "react";
import { render } from "react-dom";
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { ElectrodeApplication } from "@walmart/electrode-application";

// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
const initialState = window.__WML_REDUX_INITIAL_STATE__;
const store = createStore(rootReducer, initialState);
render(
  <ElectrodeApplication>
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>
  </ElectrodeApplication>,
  window.document.querySelector(".js-content")
);

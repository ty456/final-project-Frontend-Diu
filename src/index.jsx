import React from "react";
import ReactDOM from "react-dom";
import "./sass/app.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

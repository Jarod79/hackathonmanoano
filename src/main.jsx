import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App.jsx";
import { CurrentPackContextProvider } from "./contexts/CurrentPack";

ReactDOM.render(
  <React.StrictMode>
    <CurrentPackContextProvider>
      <App />
    </CurrentPackContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

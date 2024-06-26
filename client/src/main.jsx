import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// axios imports and config
import axios from "axios";
axios.defaults.baseURL = "https://gettowork.onrender.com/api";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

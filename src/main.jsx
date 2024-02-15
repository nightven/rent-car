import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-car">
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

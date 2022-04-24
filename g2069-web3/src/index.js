import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/Context";
import "./i18n";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <Suspense fallback='...is loading'>
      <App />
      </Suspense>
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);

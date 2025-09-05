import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { loadAnalytics } from "./helper/analytics";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Defer analytics loading until the browser is idle so that
// third‑party scripts do not compete for main‑thread time
// during initial rendering.
window.addEventListener("load", () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadAnalytics);
  } else {
    setTimeout(loadAnalytics, 2000);
  }
});

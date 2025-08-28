import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import cssHref from "./index.scss?url";

// defer stylesheet loading to avoid render-blocking
const link = document.createElement("link");
link.rel = "preload";
link.as = "style";
link.href = cssHref;
link.onload = () => {
  link.onload = null;
  link.rel = "stylesheet";
};
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

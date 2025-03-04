import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // ✅ Ensure this file exists
import App from "./App";  // ✅ Correct path
import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Ensure Bootstrap is installed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

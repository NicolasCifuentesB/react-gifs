import React from "react";
import ReactDOM from "react-dom/client";
import { GitExpertApp } from "./GitExpertApp";
import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GitExpertApp />
  </React.StrictMode>
);

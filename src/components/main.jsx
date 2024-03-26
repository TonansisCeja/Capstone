import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";

// place css in the src/style directory, and import them like this:
import "./style/index.css";

// selects the html element
const root = document.getElementById("root");
//create root to display app component

const app = createRoot(root);
// render component in the html element
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

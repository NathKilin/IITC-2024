import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./App.css"; 

// connect the react to html to rendering App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

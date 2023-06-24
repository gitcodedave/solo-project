import React from "react";
import ReactDOM from "react-dom/client";
// import createRoot from react-dom/client
import App from "./App.jsx";
import "./App.scss";



const container = document.getElementById("app");
// ReactDOM.render(<App />, container);
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
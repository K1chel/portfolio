import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import { ModalProviders } from "./providers/modal-providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ModalProviders />
      <Toaster theme="dark" />
    </BrowserRouter>
  </React.StrictMode>
);

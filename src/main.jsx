import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { ModalProviders } from "./providers/modal-providers.jsx";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ModalProviders />
      <Toaster theme="dark" />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);

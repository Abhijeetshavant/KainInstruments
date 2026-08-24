import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QuoteCartProvider } from "./hooks/useQuoteCart";
import "./index.css"; // Make sure this is the correct CSS file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuoteCartProvider>
        <App />
      </QuoteCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

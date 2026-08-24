import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QuoteCartProvider } from "./hooks/useQuoteCart"; // Import the provider
import "./index.css"; // ✅

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuoteCartProvider>
        {" "}
        {/* Wrap App with the provider */}
        <App />
      </QuoteCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

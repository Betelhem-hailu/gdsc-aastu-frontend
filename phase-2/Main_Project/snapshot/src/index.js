import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ReactDOM.render(
  <BrowserRouter>
  <QueryClientProvider client={new QueryClient()}>
      <App />
  </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

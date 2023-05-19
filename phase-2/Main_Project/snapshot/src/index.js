import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./components/home/search/DataContext";
ReactDOM.render(
  <BrowserRouter>
  <QueryClientProvider client={new QueryClient()}>
    <SearchProvider>
      <App />
    </SearchProvider>
  </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
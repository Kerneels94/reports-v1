import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Report from "./components/Report";
import Pricing from "./components/Pricing";
import Dashboard from "./components/adminDashboard/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/reports",
      element: <Report />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
  ]);

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

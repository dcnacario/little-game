import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Birthday from "./page/Birthday";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "happy-birthday",
    element: <Birthday />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

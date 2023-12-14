import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./routes/MainPage";
import { AuthPage } from "./routes/AuthPage";

const router = createBrowserRouter([
  {
    path: "/Auth",
    element: <AuthPage></AuthPage>,
  },
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

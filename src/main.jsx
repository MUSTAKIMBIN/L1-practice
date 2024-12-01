import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AppliedJob from "./Components/AppliedJob.jsx";
import Blog from "./Components/Blog.jsx";
import ErrorElement from "./Components/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { path: "/applied_job", element: <AppliedJob></AppliedJob> },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
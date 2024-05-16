import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import "./index.css";
import SearchPage from "./components/pages/SearchPage/SearchPage.jsx";
import SearchContent from "./components/pages/SearchPage/SearchContent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/search/result",
        element: <SearchContent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import Main from "../Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Home/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
export default router;

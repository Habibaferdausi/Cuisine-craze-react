import React from "react";
import Main from "../Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Home/About";
import Login from "../Login and reg/Login";
import Register from "../Login and reg/Register";
import Blogs from "../Pages/Blogs";
import PrivetRouter from "./PrivetRouter";
import ChefDetails from "../Pages/ChefDetails";

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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "details/:id",
        element: (
          <PrivetRouter>
            <ChefDetails></ChefDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-habibaferdausi.vercel.app/allData/${params.id}`
          ),
      },
    ],
  },
]);
export default router;

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar fixed  top-0  w-full   z-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <div>
            {" "}
            <a
              className="btn btn-ghost normal-case lg:text-3xl  text-lg font-bold italic text-yellow-500 rounded"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              <span className="text-yellow-500 ">
                <FontAwesomeIcon className="me-3" icon={faUtensils} />
              </span>
              Cuisine Craze
            </a>
          </div>
        </div>
        <div className=" hidden lg:flex ">
          <Nav className="text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold   ms-4"
                  : "text-black ms-4 font-semibold text-decoration-none "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold   ms-4"
                  : "text-black ms-4 font-semibold text-decoration-none "
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold   ms-4"
                  : "text-black ms-4 font-semibold text-decoration-none "
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold   ms-4"
                  : "text-black ms-4 font-semibold text-decoration-none "
              }
            >
              Login
            </NavLink>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

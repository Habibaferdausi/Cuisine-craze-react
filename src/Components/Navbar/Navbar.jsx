import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative">
      <div
        className={`navbar fixed top-0 z-20 w-full bg-transparent ${
          scroll
            ? "bg-transparent bg-gradient-to-l   from-transparent to-black  "
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn text-yellow-500 btn-ghost lg:hidden"
            >
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-100 rounded-box w-40"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white  ms-4"
                      : "text-yellow-500  ms-4 font-semibold text-decoration-none "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold  text-white ms-4"
                      : "text-yellow-500  ms-4 font-semibold text-decoration-none "
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold  text-white ms-4"
                      : "text-yellow-500 ms-4 font-semibold text-decoration-none "
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? " text-black font-semibold   ms-4"
                      : " text-yellow-500   ms-4 font-semibold text-decoration-none "
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:px-8 flex">
            {" "}
            <a
              className="btn  btn-ghost   normal-case lg:text-3xl   text-lg font-bold italic text-yellow-500 rounded"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              <span className="text-yellow-500 ">
                <FontAwesomeIcon className="me-3" icon={faUtensils} />
              </span>
              <Link to="/"> Cuisine Craze </Link>
            </a>
          </div>
        </div>
        <div className=" hidden lg:flex navbar-center  text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-white  ms-4"
                : "text-yellow-500  ms-4 font-semibold text-decoration-none "
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white ms-4"
                : "text-yellow-500  ms-4 font-semibold text-decoration-none "
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? " font-semibold  text-white ms-4"
                : "text-yellow-500 ms-4 font-semibold text-decoration-none "
            }
          >
            Blogs
          </NavLink>
        </div>
        <div className="navbar-end mx-auto text-lg">
          {user ? (
            <a href="#" className="flex items-center">
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="rounded-full mr-2 ms-4"
                  width="45"
                  height="45"
                />
                <div className="absolute bottom-0 right-0 bg-gray-200 rounded-full w-3 h-3"></div>
              </div>
              <span className="mr-3 text-red-300 font-bold ">
                {user.displayName}
              </span>
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </a>
          ) : (
            <button className="btn btn-warning me-4">
              <Link to="/login" className="text-white">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

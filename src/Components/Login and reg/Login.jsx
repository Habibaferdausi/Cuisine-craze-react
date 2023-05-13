import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero   bg-base-200">
        <div className="hero  mt-20 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
              <img
                src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center font-bold ">Login</h1>
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn bg-red-500 border border-0"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <p className="my-4  text-center">
                  New to{" "}
                  <span className="text-yellow-500 font-semibold">
                    Cuisine Craze?
                  </span>
                  <Link className="text-red-500 ms-4 font-bold" to="/register">
                    Sign Up
                  </Link>{" "}
                </p>
                <div className="divider">OR</div>

                <h2 className=" text-blue-400 text-center font-bold">
                  Sign In With
                </h2>
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <button className="">
                      <img
                        src="https://freesvg.org/img/1534129544.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </button>
                  </div>
                  <div>
                    <button>
                      <img
                        src="https://freesvg.org/img/1482589369.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      {/* carousel section */}
      <div className="mb-20 ">
        <div className="carousel h-400 mt-10 w-full">
          <div
            id="slide1"
            className="carousel-item relative rounded w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3">
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={["Welcome to", 500, "Cuisine Craze", 500]}
                className="text-4xl lg:text-7xl"
                style={{
                  fontFamily: "Brush Script MT, cursive",
                  background: "-webkit-linear-gradient(#ffff, #FAD959)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textFillColor: "transparent",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3 ">
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={["We Serve", 600, "Quality Food", 600]}
                style={{
                  fontSize: "2em",
                  fontFamily: "Verdana, sans-serif",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3 ">
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={[
                  " Experience authentic Chinese cuisine like never before.",
                  1500,
                  " Experience authentic Chinese cuisine  Experience the Culinary Delights You Deserve  ",
                  90,
                ]}
                className="text-xl lg:text-3xl"
                style={{
                  fontFamily: "Verdana, sans-serif",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About section */}

      <div>
        <div className="mt-8 text-start lg:mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 mt-2  lg:mt-20 lg:pt-20  lg:pb-20">
            <div className=" text-start">
              <div data-aos="fade-up">
                <h1 className="text-black text-5xl  mb-5 mt-12 font-semibold ">
                  About{" "}
                  <span
                    className="text-yellow-500"
                    style={{
                      fontFamily: "Brush Script MT, cursive",
                    }}
                  >
                    Us{" "}
                  </span>{" "}
                </h1>
              </div>

              <div data-aos="fade-right">
                <p className="mt-4  mb-3 me-3 text-xl ">
                  Welcome to Cuisine Craze, your destination for authentic and
                  delicious Chinese cuisine! where we offer a tantalizing
                  journey into the world of authentic Chinese cuisine. We take
                  pride in delivering the finest Chinese food that not only
                  tantalizes your taste buds but also nourishes your soul.
                </p>

                <Link
                  to="/about"
                  className="btn bg-yellow-500 border border-0 mt-4 mb-7"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className=" border rounded ">
              <img
                src="https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* why choose */}
    </div>
  );
};

export default Home;

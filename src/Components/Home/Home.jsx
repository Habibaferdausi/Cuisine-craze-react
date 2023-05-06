import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      <div className="carousel mt-5 h-500 w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <TypeAnimation
              sequence={["Welcome to", 500, "Cuisine Craze", 500]}
              style={{
                fontSize: "5em",
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
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
              style={{
                fontSize: "2em",
                fontFamily: "Verdana, sans-serif",
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      <section>
        <div></div>
      </section>
    </div>
  );
};

export default Home;

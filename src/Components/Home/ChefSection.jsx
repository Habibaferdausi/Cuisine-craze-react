import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const ChefSection = () => {
  const [chef, setChef] = useState([]);

  fetch("https://assignment-10-server-habibaferdausi.vercel.app/allData")
    .then((res) => res.json())
    .then((data) => {
      setChef(data);
    });
  return (
    <section className="mt-20 mx-8 lg:mx-20">
      <div data-aos="fade-down">
        <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
          Our
          <span
            className="text-yellow-500 ms-3"
            style={{
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            Chefs{" "}
          </span>{" "}
        </h1>
      </div>
      <div data-aos="fade-up-right">
        <h1 className="text-gray-500 text-2xl lg:text-4xl  text-center mb-10 font-semibold ">
          Our Special Chefs
        </h1>
      </div>
      <div className="grid  grid-cols-1 gap-5  lg:grid-cols-3 ">
        {chef.map((chef) => (
          <div
            key={chef.id}
            className="card w-100 h-100   bg-base-100 shadow-xl"
            data-aos="zoom-in-up"
          >
            <figure>
              <img src={chef.picture} alt="chef" className="h-60" />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-xl lg:mb-3 lg:text-3xl">
                {chef.name}
              </h1>
              <h6 className="">
                <span className=" me-2 lg:text-lg text-yellow-500 font-semibold">
                  Experience :
                </span>{" "}
                {chef.years_of_experience} Years
              </h6>
              <h6 className="font-bold">
                {" "}
                <span className=" me-2  font-semibold lg:text-lg text-yellow-500">
                  {" "}
                  Numbers of recipes :{" "}
                </span>{" "}
                {chef.num_recipes}{" "}
              </h6>
              <div className=" mt-5 lg:mt-7 flex items-center justify-between">
                <div>
                  <button className="flex font-bold items-center  justify-center text-black text-lg">
                    Likes :{" "}
                    <span className="text-blue-600 ms-2">{chef.likes} </span>{" "}
                    <Icon
                      icon="mdi:like-outline"
                      className="ms-2 me-2 text-blue-600"
                    />
                  </button>
                </div>
                <div>
                  {" "}
                  <Link to={`details/${chef.id}`}>
                    <AwesomeButton type="danger">View Details</AwesomeButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefSection;

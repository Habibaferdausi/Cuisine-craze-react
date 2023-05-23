import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ChefDetails = () => {
  const chef = useLoaderData();
  const added = () => toast("Added to Favorite");

  console.log(chef);
  const [disable, setDisable] = useState([null]);

  const buttonClick = [
    () => {
      setDisable([...disable, 0]);
    },
    () => {
      setDisable([...disable, 1]);
    },
    () => {
      setDisable([...disable, 2]);
    },
  ];

  const isButtonDisable = (value) => {
    return disable.includes(value);
  };
  const handleFav = (value) => {
    if (!isButtonDisable(value)) {
      buttonClick[value]();
    }
  };
  return (
    <div>
      <div className="mt-10 ">
        <h1 className="mt-10 lg:mt-20 text-xxl lg:text-2xl text-yellow-500 font-bold  mb-3 pt-5 text-center">
          Welcome to <span className="text-red-500">{chef.item.name}'s </span>{" "}
          Recipe{" "}
        </h1>
        <div>
          <div className=" lg:flex justify-between w-100 h-300 container mx-auto mt-8 lg:mt-11">
            <div className="mb-4">
              <img src={chef.item.picture} className="w-100 h-300 rounded" />
            </div>
            <div className="mt-2 container ms-5 lg:ms-10 text-lg lg:text-xxl">
              <h1 className="text-red-500 font-bold mb-3">
                Name:{" "}
                <span className="text-black ms-2 "> {chef.item.name}</span>
              </h1>
              <p className="text-red-500 font-bold mb-3 ">
                Bio:
                <span span className="text-gray-800 font-semibold ms-2">
                  {chef.item.bio}
                </span>
              </p>
              <p className="text-red-500 mb-3 flex font-semibold ">
                Likes:{" "}
                <span className="text-black ms-2">{chef.item.likes} </span>{" "}
                <Icon
                  icon="mdi:like-outline"
                  className="ms-2 me-2 flex items-center text-2xl text-blue-400"
                />
              </p>
              <p className="text-red-500 font-semibold mb-3 ">
                Number of Recipes:
                <span span className="text-black ms-2">
                  {chef.item.num_recipes}
                </span>
              </p>
              <p className="text-red-500 font-semibold mb-3 ">
                Experience:
                <span span className="text-black ms-2">
                  {chef.item.years_of_experience} Years
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;

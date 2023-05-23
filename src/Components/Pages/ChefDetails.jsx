import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

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
      <div className="mt-10 ">
        <h1 className="mt-10 lg:mt-20 text-xxl lg:text-2xl text-yellow-500 font-bold  mb-3 lg:mb-8  pt-5 text-center">
          Some{" "}
          <span className="text-red-500 ms-2 me-2">{chef.item.name}'s </span>{" "}
          Special Recipes{" "}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-20 mt-10 ">
          {chef.item.recipes.map((recipes, value) => (
            <div
              key={recipes.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img src={recipes.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-green-600 text-xxl font-bold">
                  {" "}
                  {recipes.name}
                </h2>
                <p className="text-lg ">
                  <span className="text-red-500 font-bold me-3">
                    Ingredients:
                  </span>
                  {recipes.ingredients}
                </p>
                <p className="text-lg">
                  <span className="text-red-500 font-bold me-3">Method:</span>
                  {recipes.method}
                </p>
                <div className="  flex item-center mt-3  items-center justify-between">
                  <div>
                    <h1 className="text-xxl lg:text-2xl me-3 font-semibold bg-slate-200 p-2 rounded">
                      {" "}
                      Rating : <span>{recipes.rating}</span>{" "}
                      <span className="text-yellow-500 mr-1">&#9733;</span>
                    </h1>
                  </div>
                  <div>
                    <button
                      className={`${
                        isButtonDisable(value)
                          ? "bg-rose-300"
                          : "bg-red-500 hover:bg-green-700"
                      } text-white font-bold py-2 px-4 rounded`}
                      onClick={() => {
                        handleFav(value);
                        Swal.fire("Good job!", "Added to Favorite!", "success");
                      }}
                      disabled={isButtonDisable(value)}
                    >
                      {isButtonDisable(value) ? (
                        "Favorite Added"
                      ) : (
                        <>
                          <span className="">Add to Favorite</span>
                          <FontAwesomeIcon icon={faHeart} className="ms-2" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;

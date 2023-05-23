import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
      <h2>this is chef details</h2>
    </div>
  );
};

export default ChefDetails;

import React from "react";

const CardItem = ({ car }) => {
  return (
    <div>
          <img src={car.img} alt="car" />
          <h2>{car.make }</h2>
    </div>
  );
};

export default CardItem;

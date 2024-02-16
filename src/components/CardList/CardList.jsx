import React, { useState } from "react";
import CardItem from "./CardItem/CardItem";
import Loader from "../Loader/Loader";
import { StyledUl } from "./CardList.styled";

const CardList = ({ data, favorite, setFavorite }) => {
  return (
    <StyledUl>
      {data?.map((car) => (
        <li key={`${car.id}${car.year}`}>
          <CardItem car={car} favorite={favorite} setFavorite={setFavorite} />
        </li>
      ))}
    </StyledUl>
  );
};

export default CardList;

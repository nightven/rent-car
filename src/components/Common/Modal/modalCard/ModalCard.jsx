import React from "react";
import { StyledDiv } from "./ModalCard.styled";
import { splitAddress } from "../../../../heplers/split";
import Button from "../../Buttons/Button";
import Close from "../../Icons/Close";

const ModalCard = ({ car }) => {
  const functional = [...car.accessories, ...car.functionalities];
  const splitedAddress = splitAddress(car.address);
  return (
    <StyledDiv>
      <div className="img-wrapper">
        <img src={car.img} alt={(car.make, car.model)} />
      </div>
      <h2>
        <span>{car.make}</span> <span className="model">{car.model}</span>,{" "}
        <span>{car.year}</span>
      </h2>
      <div className="short-info">
        <div>
          <span>{splitedAddress[splitedAddress.length - 2]}</span>
          <span className="verticalLine"></span>
          <span>{splitedAddress[splitedAddress.length - 1]}</span>
          <span className="verticalLine"></span>
          <span>id: {car.id}</span>
          <span className="verticalLine"></span>
          <span>Type: {car.type}</span>
        </div>
        <div>
          <span>Fuel Consumption: {car.fuelConsumption}</span>
          <span className="verticalLine"></span>
          <span>Engine Size: {car.engineSize}</span>
        </div>
      </div>
      <p className="descriptions">{car.description}</p>
      <div className="accessories">
        <h3>Accessories and functionalities:</h3>
        <ul>
          {functional.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                {index < functional.length - 1 && (
                  <span className="verticalLine"></span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <h3>Rental Conditions:</h3>
      <div className="conditions">
        <p>
          Minimum age: <span className="age">25</span>
        </p>
        <p>Valid driver’s license</p>
        <p>Security deposite required</p>
        <p>Mileage: {car.mileage}</p>
        <p>Price: {car.rentalPrice}</p>
      </div>
      <a className="rent" href="tel:+380730000000">
        Rental car
      </a>
    </StyledDiv>
  );
};

export default ModalCard;

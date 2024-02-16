import React from "react";
import { StyledDiv } from "./ModalCard.styled";

import { splitAddress } from "../../../../heplers/split";

const ModalCard = ({ car, favorite, handleClick }) => {
  const functional = [...car.accessories, ...car.functionalities];

  const splitedAddress = splitAddress(car.address);

  const isFavorite = favorite.some((localCar) => localCar.id === car.id);

  const mileage = car.mileage.toString().split("");


  return (
    <StyledDiv>
      <div className="img-wrapper">
        <img src={car.img} alt={(car.make, car.model)} />
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={isFavorite ? "heart favored" : "heart"}
          >
            <path
              d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
                {index < functional.length - 1 && (
                  <span className="verticalLine"></span>
                )}
                <span>{item}</span>
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
        <p>
          Mileage: {mileage.splice(0, 1)},{mileage.join("")}
        </p>
        <p>Price: {car.rentalPrice}</p>
      </div>
      <a className="rent" href="tel:+380730000000">
        Rental car
      </a>
    </StyledDiv>
  );
};

export default ModalCard;

import React, { useState } from "react";
import { StyledDiv } from "./CardItem.styled";
import Button from "../../Common/Buttons/Button";
import Modal from "../../Common/Modal/Modal";
import ModalCard from "../../Common/Modal/modalCard/ModalCard";
import { setToLocal } from "../../../heplers/localStoreage";
import { splitAddress, splitFunctional } from "../../../heplers/split";

const CardItem = ({ car, favorite, setFavorite }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isFavorite = favorite.some((localCar) => localCar.id === car.id);

  const splitedAddress = splitAddress(car.address);
  const splitedFunctional = splitFunctional(car.functionalities);

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorite();
    } else {
      setFavorite((prev) => [...prev, car]);
      setToLocal(car);
    }
  };

  const removeFromFavorite = () => {
    const cars = favorite.filter((favCar) => favCar.id !== car.id);
    setFavorite(cars);
    localStorage.setItem("cars", JSON.stringify(cars));
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <StyledDiv>
        <div>
          <div className="img-warpper">
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

          <div className="title-wrapper">
            <h2>
              <span>{car.make}</span> <span className="model">{car.model}</span>
              , <span>{car.year}</span>
            </h2>
            <p>{car.rentalPrice}</p>
          </div>

          <p className="descr">
            {splitedAddress[splitedAddress.length - 2]}
            <span className="verticalLine"></span>
            {splitedAddress[splitedAddress.length - 1]}
            <span className="verticalLine"></span>
            {car.rentalCompany}
            <span className="verticalLine"></span>
            {car.rentalCompany.length > 18 ? (
              ""
            ) : (
              <>
                Premium <span className="verticalLine"></span>
              </>
            )}
            {car.type}
            <span className="verticalLine"></span>
            {car.model}
            <span className="verticalLine"></span>
            {car.mileage}
            <span className="verticalLine"></span>
            {splitedFunctional[0]} {splitedFunctional[1]}
          </p>
        </div>

        <Button
          text={"Learn more"}
          width={"100%"}
          height={"44px"}
          shadow={"var(--btn-box-shadow)"}
          hover={"var(--active-blue)"}
          onClick={() => setModalIsOpen(true)}
        />
      </StyledDiv>
      {modalIsOpen && (
        <Modal onCloseModal={onCloseModal}>
          <ModalCard
            car={car}
            favorite={favorite}
            handleClick={handleClick}
          />
        </Modal>
      )}
    </>
  );
};

export default CardItem;

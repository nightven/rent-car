import React, { useState } from "react";

import { StyledDiv } from "./CardItem.styled";
import Button from "../../Common/Buttons/Button";
import Heart from "../../Common/Icons/Heart";
import Modal from "../../Common/Modal/Modal";
import ModalCard from "../../Common/Modal/modalCard/ModalCard";
import { splitAddress, splitFunctional } from "../../../heplers/split";

const CardItem = ({ car }) => {
  const splitedAddress = splitAddress(car.address);
  const splitedFunctional = splitFunctional(car.functionalities);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <StyledDiv>
        <div>
          <div className="img-warpper">
            <img src={car.img} alt={(car.make, car.model)} />
            <Heart />
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
      {modalIsOpen && <Modal onCloseModal={onCloseModal}> <ModalCard car={car}/></Modal>}
    </>
  );
};

export default CardItem;

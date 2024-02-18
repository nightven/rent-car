import React from "react";
import Cars from "/white-cars.jpg";
import { NavLink } from "react-router-dom";
import { StyledDiv } from "./styles/HomePage.styled";

const carRentalFeatures = {
  "Diverse Range of Cars":
    "Whether you need a stylish sedan for a business trip, a spacious SUV for family vacations, or a compact car for urban adventures, we have the perfect solution for you.",
  "Easy Booking":
    "Our website provides a simple and intuitive interface for booking. Just select your dates, choose the type of car, and complete your order in just a few clicks.",
  "Fair Prices":
    "We value your budget and offer transparent and competitive rates. No hidden fees, only clear rental conditions.",
  "Safety and Comfort":
    "All our cars undergo regular maintenance to ensure your safety and comfort on the road.",
  "Flexible Rental Options":
    "Choose the duration of your rental that suits your plans – from a few hours to several weeks.",
};

const Home = () => {
  return (
    <section>
      <div className="container">
        <StyledDiv>
          <h1>
            <span>Choose a car </span>
            <span>with Rent Car</span>
          </h1>
          <video name="media" autoPlay muted loop width="100%">
            <source
              src="https://ukr-prokat.com/wp-content/themes/webera/images/home-video.mp4"
              type="video/mp4"
            />
          </video>
          <h2>Lots of cars for your trips in comfort.</h2>
          <div className="features">
            <h3 className="features-title">Features:</h3>
            <ul className="features-list">
              {Object.entries(carRentalFeatures).map(
                ([feature, description], index) => (
                  <li key={index}>
                    <strong >{feature}:</strong>{" "}
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="img-wrapper">
            <img src={Cars} alt="" />
          </div>
          <NavLink to="/catalog" className="rent-btn">
            Rent car now
          </NavLink>
        </StyledDiv>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import Cars from "/white-cars.jpg";
import { NavLink } from "react-router-dom";
import { StyledDiv } from "./styles/HomePage.styled";

const Home = () => {
  return (
    <section>
      <div className="container">
        <StyledDiv>
          <h1>
            <span>Choose a car </span>
            <span>with Rent Car</span>
          </h1>
          <video name="media" autoplay="" muted="" loop="" width="100%">
            <source
              src="https://ukr-prokat.com/wp-content/themes/webera/images/home-video.mp4"
              type="video/mp4"
            />
          </video>
          <h2>Lots of cars for your trips in comfort.</h2>
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

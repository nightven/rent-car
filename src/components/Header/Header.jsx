import React from "react";
import NavBar from "../NavBar/NavBar";
import { StyledDiv } from "./Header.styled";
import Logo from "../Common/Icons/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledDiv className="container">
      <NavLink to="/" className="logo">
        <Logo />
      </NavLink>
      <NavBar />
    </StyledDiv>
  );
};

export default Header;

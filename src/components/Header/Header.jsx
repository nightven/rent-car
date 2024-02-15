import React from "react";
import NavBar from "../NavBar/NavBar";
import { StyledDiv } from "./Header.styled";
import Logo from "../Common/Icons/Logo";

const Header = () => {
  return (
    <StyledDiv className="container">
      <a href="/" className="logo">
        <Logo />
      </a>
      <NavBar />
    </StyledDiv>
  );
};

export default Header;

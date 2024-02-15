import React from "react";
import { StyledNav, StyledUl } from "./NavBar.styled";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <StyledUl>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="catalog">Catalog</a>
          </li>
          <li>
            <a href="favorites">Favorites</a>
          </li>
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default NavBar;

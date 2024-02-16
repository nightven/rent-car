import React from "react";
import { StyledNav, StyledUl } from "./NavBar.styled";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <StyledUl>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favorites</NavLink>
          </li>
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default NavBar;

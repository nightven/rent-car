import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <a href="/" className="logo">
        <img
          src="/logo.svg"
          alt="logo car rent"
        />
      </a>
      <NavBar />
    </>
  );
};

export default Header;

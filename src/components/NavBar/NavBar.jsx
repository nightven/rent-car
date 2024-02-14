import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="catalog">Catalog</a>
        </li>
        <li>
          <a href="favorites">Favorites</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

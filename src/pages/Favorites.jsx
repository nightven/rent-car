import React, { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 50px;
`;

const Favorites = () => {
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("cars")) ?? []
  );

  useEffect(() => {}, [favorite]);

  return (
    <StyledSection>
      <div className="container container-favorite">
        <CardList
          data={favorite}
          setFavorite={setFavorite}
          favorite={favorite}
        />
        ;
      </div>
    </StyledSection>
  );
};

export default Favorites;

import React, { useState } from "react";
import InputPanel from "../components/InputPanel/InputPanel";
import CardList from "../components/CardList/CardList";
import Button from "../components/Common/Buttons/Button";

const Catalog = () => {
  return (
    <div className="container">
     <h1>Catalog</h1>
      <InputPanel />
      <CardList />
      <Button
        text={"Load more"}
        width={"100px"}
        height={"44px"}
        gradient={"var(--primary-white)"}
        color={"var(--active-blue)"}
      />
    </div>
  );
};

export default Catalog;

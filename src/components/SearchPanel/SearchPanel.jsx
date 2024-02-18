import React, { useState } from "react";
import Button from "../Common/Buttons/Button";
import { StyledForm, StyledSelect, customStyles } from "./SearchPanel.styled";

import CarMake from "../../../utils/CarMake.json";
import CarPrice from "../../../utils/CarPrice.json";



const SearchPanel = ({ setQuery }) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery({ make, price });
  };
  const onChange = (selectedOption, name) => {
    if (name === "make") {
      if (selectedOption.value === "All") {
        setMake("");
      } else setMake(selectedOption.value);
    } else if (name === "price") {
      setPrice(selectedOption.value);
    }
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <label>
        <StyledSelect
          options={CarMake}
          placeholder="Enter the text"
          onChange={(selectedOption) => onChange(selectedOption, "make")}
          styles={customStyles}
        />
      </label>
      <label>
        <StyledSelect
          options={CarPrice}
          placeholder="To $"
          onChange={(selectedOption) => onChange(selectedOption, "price")}
          styles={customStyles}
        />
      </label>
      <Button width={"136px"} height={"48px"} text={"Search"} type="submit" />
    </StyledForm>
  );
};

export default SearchPanel;

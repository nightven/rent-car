import React, { useState } from "react";
import Select from "react-select";
import Button from "../Common/Buttons/Button";
import { StyledForm } from "./InputPanel.styled";

const carMake = [
  { value: "All", label: "All" },
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "chrysler", label: "Chrysler" },
  { value: "kia", label: "Kia" },
  { value: "land", label: "Land" },
];
const carPrice = [
  { value: "", label: "To $" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
  { value: "70", label: "70" },
  { value: "80", label: "80" },
  { value: "90", label: "90" },
  { value: "100", label: "100" },
  { value: "120", label: "120" },
  { value: "130", label: "130" },
  { value: "140", label: "140" },
  { value: "150", label: "150" },
  { value: "160", label: "160" },
  { value: "170", label: "170" },
  { value: "180", label: "180" },
  { value: "190", label: "190" },
  { value: "200", label: "200" },
  { value: "250", label: "250" },
  { value: "300", label: "300" },
  { value: "400", label: "400" },
  { value: "500", label: "500" },
  { value: "600", label: "600" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    border: "2px solid #ddd",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#407bff" : "#fff",
    color: state.isSelected ? "#fff" : "#000",
  }),
};

const InputPanel = ({ setQuery }) => {
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
        <Select
          options={carMake}
          placeholder="Enter the text"
          onChange={(selectedOption) => onChange(selectedOption, "make")}
          styles={customStyles}
        />
      </label>
      <label>
        <Select
          options={carPrice}
          placeholder="To $"
          onChange={(selectedOption) => onChange(selectedOption, "price")}
          styles={customStyles}
        />
      </label>
      <Button width={"136px"} height={"48px"} text={"Search"} type="submit" />
    </StyledForm>
  );
};

export default InputPanel;

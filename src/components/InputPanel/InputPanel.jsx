import React from "react";
import { StyledDiv } from "./InputPanel.styled";
import Select from "react-select";
import Button from "../Common/Buttons/Button";

const carMake = [
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
  { value: "10", label: "10" },
  { value: "20", label: "20" },
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
  { value: "1000", label: "1000" },
  { value: "1200", label: "1200" },
  { value: "1500", label: "1500" },
];

const InputPanel = () => {
  return (
    <StyledDiv>
      <Select options={carMake} />
      <Select options={carPrice} />
      <div>
        <input type="number" placeholder="From" />
        <input type="number" placeholder="To" />
      </div>

      <Button width={'136px'} height={"48px"} text={"Search" } />
    </StyledDiv>
  );
};

export default InputPanel;
